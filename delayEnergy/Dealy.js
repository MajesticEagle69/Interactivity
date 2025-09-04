let BTN;

let delay = 100; // milliseconds
let timesPressed = 0;

function setup() {
 BTN = document.getElementById('btn');

 BTN.style.position = "absolute";
}

document.addEventListener("DOMContentLoaded", setup);

document.addEventListener("keydown", buildup);
document.addEventListener("keyup", release);

function buildup() {
    delay += 10;
    timesPressed += 0.1;
}

function release() {
    for(let i = 1; i -1 < timesPressed; i++) {
        setTimeout(moveBTN, delay * i);
    }
    
    delay = 100;
    timesPressed = 0;
}

function moveBTN() {
    BTN.style.left = Math.random() * (window.innerWidth - BTN.clientWidth) + "px";
    BTN.style.top = Math.random() * (window.innerHeight - BTN.clientHeight) + "px";
}
