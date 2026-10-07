# Personal Portfolio Website

Welcome to my personal portfolio website repository. This project showcases my skills, projects, and experiences in web development.

## Features

- **Responsive Design**: Optimized for various devices and screen sizes.
- **Projects Showcase**: A collection of my notable projects with descriptions and links.
- **About Me**: Information about my background, skills, and experiences.
- **Contact Form**: A form to get in touch with me directly.

## Technologies Used

- HTML
- CSS
- JavaScript

## Usage

The website should be hosted on www.kapsiar.sk

Feel free to explore the website and the files to learn more about my work and experiences. You can also use this repository as a template for your own portfolio website as long as you give propper credit.

## Layout and deployment

Only `public/` is served by Apache (it is mounted as the document root). Repo files such as `.git`, `docker-compose.yaml`, `webhook/` and `docker/` live outside it and are never reachable from the web.

- `docker/apache/site.conf` is mounted into the stock `php:8.2-apache` image. It restores the real visitor IP behind Cloudflare (`mod_remoteip`, trusted proxies = Cloudflare ranges), defines the `extended` log format (`combined` + bytes in, bytes out, response time in µs, connecting address) and denies dotfiles.
- Apache logs are written to `/var/log/website/` on the host (bind mount), so they survive container recreation. Install `docker/logrotate/website-apache` as `/etc/logrotate.d/website-apache` on the server.
- Pushing to the `live` branch makes the webhook (`webhook/app.py`) run `git fetch` + `git reset --hard origin/live` on the server. It does **not** recreate containers: after changing `docker-compose.yaml`, `docker/` or `webhook/`, run `docker-compose up -d --build` on the server.
- The webhook needs `WEBHOOK_SECRET` in a `.env` file next to `docker-compose.yaml` (see `.env.example`) and the same secret in the GitHub webhook settings. Without a secret it rejects every request.

## Credits

The design of this website was inspired by https://github.com/GitSquared/edex-ui which was inspired by the tron movie.
