const pause_play_el = document.getElementById("pause-play");
let intervalID = null;
let timeLeft = 30 * 60; // sets initial time to 30 minutes
let isPaused = true;
const playBtn = document.getElementById("playbtn");
const pauseBtn = document.getElementById("pausebtn");

function updateDisplay() {
  const displayElement = document.getElementById("timer-text");
  displayElement.textContent = formatTime(timeLeft);

  console.log(displayElement);
}

function updateTimer() {
  if (!isPaused && timeLeft > 0) {
    timeLeft--;
    updateDisplay();
    console.log("Time left:", timeLeft);
  }
  if (timeLeft === 0) {
    clearInterval(intervalID);
    console.log("Timer finished");
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function pausePlay() {
  isPaused = !isPaused;

  playBtn.style.display = isPaused ? "inline" : "none";
  pauseBtn.style.display = isPaused ? "none" : "inline";
  if (isPaused && timeLeft > 0) {
    clearInterval(intervalID);
  } else if (!isPaused && timeLeft > 0) {
    intervalID = setInterval(updateTimer, 1000);
  }
}

/*Pomodoro button*/
const pomodoroBtnEl = document.getElementById("Pomodoro");
const containerEl = document.getElementById("container1");
const startButtonEl = document.getElementById("Start");
const closeModalEl = document.getElementById("close-modal");

pomodoroBtnEl.onclick = function () {
  closeModals();
  containerEl.style.display = "block";
};

closeModalEl.onclick = function (event) {
  if (event.target == closeModalEl) {
    containerEl.style.display = "none";
  }
};
startButtonEl.onclick = function startTimer() {
  const inputTimeInMins = parseFloat(document.querySelector(".input1").value);
  if (!isNaN(inputTimeInMins) && inputTimeInMins > 0) {
    containerEl.style.display = "none"; //hides the popup
    timeLeft = inputTimeInMins * 60;
    updateDisplay();
    clearInterval(intervalID);
    intervalID = setInterval(updateTimer, 1000);
  }
};

/*Short Break*/
const shortBrEl = document.getElementById("Short");
const containerEl2 = document.getElementById("container2");
const startButtonEl2 = document.getElementById("StartBr1");
const closeModalEl2 = document.getElementById("close-modal2");

shortBrEl.onclick = function () {
  closeModals();
  containerEl2.style.display = "block";
};

closeModalEl2.onclick = function () {
  containerEl2.style.display = "none";
};

startButtonEl2.onclick = function startTimer() {
  const inputTimeInMins = parseFloat(document.querySelector(".input2").value);
  if (!isNaN(inputTimeInMins) && inputTimeInMins > 0) {
    containerEl2.style.display = "none";
  }
}

startButtonEl2.onclick = function startTimer(){
    var inputTimeInMins = parseFloat(document.querySelector(".input2").value);
    if(!isNaN(inputTimeInMins) && inputTimeInMins>0){
        containerEl2.style.display = "none";
        document.body.style.backgroundImage = "url('flowers-8100386.jpg')";
        timeLeft = inputTimeInMins*60;
        updateDisplay();
        clearInterval(intervalID);
        intervalID = setInterval(updateTimer, 1000);
    }
}

/*Long Break*/
const longBrEl = document.getElementById("Long");
const containerEl3 = document.getElementById("container3");
const startButtonEl3 = document.getElementById("StartBr2");
const closeModalEl3 = document.getElementById("close-modal3");

longBrEl.onclick = function () {
  closeModals();
  containerEl3.style.display = "block";
};

closeModalEl3.onclick = function () {
  containerEl3.style.display = "none";
};


startButtonEl3.onclick = function startTimer(){
    var inputTimeInMins = parseFloat(document.querySelector(".input2").value);
    if(!isNaN(inputTimeInMins) && inputTimeInMins>0){
        containerEl3.style.display = "none";
        document.body.style.backgroundImage = "url('broccoli-8174625.jpg')";
        timeLeft = inputTimeInMins*60;
        updateDisplay();
        clearInterval(intervalID);
        intervalID = setInterval(updateTimer, 1000);
    }
}

/*restart timer*/
const restartButtonEl = document.getElementById("restart");
restartButtonEl.addEventListener("click", restartTimer);

function restartTimer() {
  timeLeft = 30 * 60;
  isPaused = true;
  updateDisplay();
  clearInterval(intervalID);

  playBtn.style.display = "inline";
  pauseBtn.style.display = "none";
}

function closeModals() {
  containerEl.style.display = "none";
  containerEl2.style.display = "none";
  containerEl3.style.display = "none";
}
