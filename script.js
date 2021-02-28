const TIMER_ID = "stopwatch";
const START_BUTTON_ID = "start-btn";
const STOP_BUTTON_ID = "stop-btn";
const PAUSE_BUTTON_ID = "pause-btn";
const LAP_BUTTON_ID = "lap-btn";
const LAPS_LIST_ID = "laps-list";

const timerElement = document.getElementById(TIMER_ID);
const startButtonElement = document.getElementById(START_BUTTON_ID);
const stopButtonElement = document.getElementById(STOP_BUTTON_ID);
const pauseButtonElement = document.getElementById(PAUSE_BUTTON_ID);
const lapButtonElement = document.getElementById(LAP_BUTTON_ID);
const lapsListElement = document.getElementById(LAPS_LIST_ID);

let miliSeconds = 0;
let seconds = 0;
let minutes = 0;
let timer;

//start function

startButtonElement.addEventListener("click", start);

function start() {
  if (!timer) {                         //speeding on each new click fix
    timer = setInterval(run, 10);
    lapsReset()
  }
}

function run() {
  timerElement.textContent =
    (minutes < 10 ? `0${minutes}` : `${minutes}`) +
    ":" +
    (seconds < 10 ? `0${seconds}` : `${seconds}`) +
    ":" +
    (miliSeconds < 10 ? `0${miliSeconds}` : `${miliSeconds}`);
  miliSeconds++;

  if (miliSeconds == 100) {
    miliSeconds = 0;
    seconds++;
  }

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

}

//pause function
pauseButtonElement.addEventListener("click", pause);

function pause() {
    clearInterval(timer);
    timer = false;                      //make start button working again
}

//stop function

stopButtonElement.addEventListener("click", stop)

function stop() {
    clearInterval(timer);

    timer = false;
    miliSeconds = 0;
    seconds = 0;
    minutes = 0;

    timerElement.textContent =
    (minutes < 10 ? `0${minutes}` : `${minutes}`) +
    ":" +
    (seconds < 10 ? `0${seconds}` : `${seconds}`) +
    ":" +
    (miliSeconds < 10 ? `0${miliSeconds}` : `${miliSeconds}`);
  miliSeconds++;
}

//lap function

lapButtonElement.addEventListener("click", lap);

function lap() {
    if(timer) {
        const lapRecord = document.createElement('li');

        lapRecord.innerText = (minutes < 10 ? `0${minutes}` : `${minutes}`) +
        ":" +
        (seconds < 10 ? `0${seconds}` : `${seconds}`) +
        ":" +
        (miliSeconds < 10 ? `0${miliSeconds}` : `${miliSeconds}`);

        lapsListElement.appendChild(lapRecord);

    }

}

//laps list reset

function lapsReset() {
    lapsListElement.innerHTML = "";
}