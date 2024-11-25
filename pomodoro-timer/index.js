const timerBtn = document.getElementById("timer");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let minutes = `5`;
let seconds = `05`;
let timerInterval;

const startTimer = () => {
  if (seconds === 0 && minutes === 0) {
    clearInterval(timerInterval);
    return;
  }
  if (seconds === 0) {
    minutes--;
    seconds = 60;
  }
  seconds--;
  timerBtn.innerText = `${minutes < "10" ? "0" : ""}${minutes}:${
    seconds < "10" ? "0" : ""
  }${seconds}`;
};

const resetFunction = () => {
  clearInterval(startTimer);
  minutes = `5`;
  seconds = `05`;
  timerBtn.innerText = "5:05";
  clearInterval(timerInterval);
};

resetBtn.addEventListener("click", resetFunction);
stopBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
});

startBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = setInterval(startTimer, 1000);
});
