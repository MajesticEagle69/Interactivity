/**
 * @typedef {{
 * press: boolean
*  deflating: boolean
*  infalteValue: number
*  defaltevalue: number
*  pressure:number
 * }} State
 */


let deflating = false;

let infalteValue = 3;
let defaltevalue = 7;
let pressure = 50;

let div;

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    div = document.getElementById('target');

    loop();
}

function loop() {
    document.addEventListener("keydown", function(event) {        
        if(!deflating) {
            pressure += infalteValue;
            infalteValue -= 0.008;

            if (infalteValue < 0.001) {
                infalteValue = 0.001;
            }

            div.style.height = `${pressure}px`;
            div.style.width = `${pressure}px`;

            if (pressure > 700) {
            pressure = 700;
            }
            console.log(pressure);
        }else {
            pressure -= defaltevalue;
            if (pressure < 50) {
                pressure = 50;
            }
            defaltevalue += 0.8;

            div.style.height = `${pressure}px`;
            div.style.width = `${pressure}px`;

            console.log(pressure);
        }

    });

    document.addEventListener("keyup", function(event) {
        deflating = !deflating;

        infalteValue = 3;
        defaltevalue = 7;

        console.log(deflating);
    });
}