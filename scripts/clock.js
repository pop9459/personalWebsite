export function startClock() {
    const today = new Date();
    let y = today.getFullYear();
    let mo = today.getMonth();
    let d = today.getDay();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = padDigits(m);
    s = padDigits(s);
    mo = padDigits(mo);
    d = padDigits(d);

    try {
        document.getElementById("clock").innerHTML = 
        "<div class='time'>" + h + ":" + m + ":" + s + "</div>" + 
        "<div class='date'>" + d + "/" + mo + "/" + y + "</div>";
    } catch (error) {
        console.warn("Clock element not found.");
    }
    setTimeout(startClock, 1000);
}

function padDigits(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}