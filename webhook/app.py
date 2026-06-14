import hashlib
import hmac
import json
import os
import subprocess
from http.server import BaseHTTPRequestHandler, HTTPServer

PORT = 5000
REPO_DIR = "/repo"
SECRET = os.environ.get("WEBHOOK_SECRET", "").encode()


def verify_signature(body: bytes, sig_header: str) -> bool:
    if not SECRET:
        return True  # no secret configured — skip validation
    if not sig_header or not sig_header.startswith("sha256="):
        return False
    mac = hmac.new(SECRET, body, hashlib.sha256)
    return hmac.compare_digest("sha256=" + mac.hexdigest(), sig_header)


def run_git(cmd: list) -> subprocess.CompletedProcess:
    return subprocess.run(cmd, cwd=REPO_DIR, capture_output=True)


class WebhookHandler(BaseHTTPRequestHandler):

    def do_POST(self):
        if self.path != "/webhook":
            self.send_response(404)
            self.end_headers()
            return

        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)

        if not verify_signature(body, self.headers.get("X-Hub-Signature-256", "")):
            self.send_response(403)
            self.end_headers()
            self.wfile.write(b"Invalid signature")
            return

        try:
            payload = json.loads(body)
        except json.JSONDecodeError:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b"Bad JSON")
            return

        ref = payload.get("ref", "")
        if ref != "refs/heads/live":
            self.send_response(200)
            self.end_headers()
            self.wfile.write(f"Ignored ref: {ref}".encode())
            return

        fetch = run_git(["git", "fetch", "origin"])
        if fetch.returncode != 0:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(b"git fetch failed:\n" + fetch.stderr)
            return

        reset = run_git(["git", "reset", "--hard", "origin/live"])
        if reset.returncode != 0:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(b"git reset failed:\n" + reset.stderr)
            return

        print(f"[deploy] {reset.stdout.decode().strip()}", flush=True)
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"Deployed")

    def do_GET(self):
        if self.path == "/health":
            self.send_response(200)
            self.end_headers()
            self.wfile.write(b"OK")
        else:
            self.send_response(404)
            self.end_headers()

    def log_message(self, format, *args):
        super().log_message(format, *args)


if __name__ == "__main__":
    server = HTTPServer(("0.0.0.0", PORT), WebhookHandler)
    print(f"Webhook listener running on :{PORT}", flush=True)
    server.serve_forever()
