/**
 * @typedef {{
 * press: boolean
*  deflating: boolean
*  infalteValue: number
*  defaltevalue: number
*  colorValue:number
 * }} State
 */


let press = false;
let deflating = false;

let infalteValue = 2.5;
let defaltevalue = 7;
let colorValue = 0;

let circle;

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    circle = document.getElementById('circle');

    loop();
}

function loop() {
    document.addEventListener("keydown", function(event) {
        press = true;
        
        if(!deflating) {
            colorValue += infalteValue;
            infalteValue -= 0.012;

            if (infalteValue < 0.001) {
                infalteValue = 0.001;
            }

            console.log(infalteValue);

            circle.style.backgroundColor = `rgb(${colorValue}, 150, 150)`;

            if (colorValue > 255) {
            colorValue = 255;
            }
            console.log(colorValue);
        }else {
            colorValue -= defaltevalue;

            circle.style.backgroundColor = `rgb(${colorValue}, 150, 150)`;

            console.log(colorValue);
    
            if (colorValue < 0) {
                colorValue = 0;
            }
        }

    });

    document.addEventListener("keyup", function(event) {
        press = false;

        deflating = !deflating;

        infalteValue = 2.5;

        console.log(deflating);
    });
}