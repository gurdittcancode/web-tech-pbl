let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

const start = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  } else {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
  }
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  display.textContent =
    formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

function reset() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  display.textContent = '00:00:00';
  isRunning = false;
}

start.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
