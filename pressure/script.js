const settings = Object.freeze({
    deflateFactor: 0.8,
    inflateFactor: 0.0095
});

/**
 * @typedef {{
*  deflating: boolean
*  infalteValue: number
*  defaltevalue: number
*  pressure: number
 * }} State
 */


/** @type State */
let state = Object.freeze({
  deflating: false,
  infalteValue: 3,
  defaltevalue: 7,
  pressure: 50
});

let div;

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    div = /** @type HTMLElement|null */ (document.getElementById('target'));

    document.addEventListener(`keydown`, onKeyDown);
    document.addEventListener(`keyup`, onKeyUp);

    setInterval(use, 5);
}

/**
 * @param {State} pressure
 * @returns
 */
function use(){
    const {pressure} = state;

    div.style.height = `${pressure}px`;
    div.style.width = `${pressure}px`;
}

/**
 * @param {state} pressure
 * @param {State} infalteValue
 * @param {State} defaltevalue
 * @param {State} deflating
 * @returns
 */
function onKeyDown() {
    let {deflating, pressure, infalteValue, defaltevalue} = state;
    const {inflateFactor, deflateFactor} = settings;
    if(!deflating) {
        pressure += infalteValue;
        infalteValue -= inflateFactor;

        if (infalteValue < 0.001) {
            infalteValue = 0.001;
        }

        if (pressure > 700) {
        pressure = 700;
        }
        console.log(pressure);
    }else {
        pressure -= defaltevalue;
        if (pressure < 50) {
            pressure = 50;
        }
        defaltevalue += deflateFactor;

        console.log(pressure);
    }

    saveState({ pressure, infalteValue, defaltevalue, deflating });
}

/**
 * @param {State} pressure
 * @param {State} infalteValue
 * @param {State} defaltevalue
 * @param {State} deflating
 * @returns
 */
function onKeyUp() {
    let {deflating, infalteValue, defaltevalue, pressure} = state;
    deflating = !deflating;

    infalteValue = 3;
    defaltevalue = 7;

    console.log(deflating);

    saveState({ pressure, infalteValue, defaltevalue, deflating });
}

function saveState(s) {
    state = Object.freeze({
        ...state,
        ...s
    });
}