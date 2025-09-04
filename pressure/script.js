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
*  div: HTMLElement|null
 * }} State
 */


/** @type State */
let state = Object.freeze({
  deflating: false,
  infalteValue: 3,
  defaltevalue: 7,
  pressure: 50,
  div: null
});

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    document.addEventListener(`keydown`, onKeyDown);
    document.addEventListener(`keyup`, onKeyUp);

    setInterval(use, 5);
}

/**
 * @param {State} pressure
 * @param {State} div
 * @returns
 */
function use(){
    const {pressure} = state;
    let {div} = state;

    if(!div) {
        return;
    }

    div.style.height = `${pressure}px`;
    div.style.width = `${pressure}px`;
}

/**
 * @param {state} pressure
 * @param {State} infalteValue
 * @param {State} defaltevalue
 * @param {State} deflating
 * @param {State} div
 * @returns
 */
function onKeyDown() {
    let {deflating, pressure, infalteValue, defaltevalue, div} = state;
    const {inflateFactor, deflateFactor} = settings;

    if(!div) {
        div = /** @type HTMLElement|null */ (document.getElementById('target'));
    }

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

    saveState({ pressure, infalteValue, defaltevalue, deflating, div });
}

/**
 * @param {State} infalteValue
 * @param {State} defaltevalue
 * @param {State} deflating
 * @returns
 */
function onKeyUp() {
    let {deflating} = state;
    deflating = !deflating;

    console.log(deflating);

    saveState({ infalteValue: 3, defaltevalue: 7, deflating });
}

/**
 * 
 * @param {Partial<State>} changes
 */
function saveState(s) {
    state = Object.freeze({
        ...state,
        ...s
    });
}