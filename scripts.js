const pause_play_el = document.getElementById("pause-play");
/*var intervalID = setInterval(updateTimer, 1000);*/
var intervalID = null;
var timeLeft = 30*60; //sets initial time to 30 minutes
var remainingTime = 0;
var isPaused = true;

function updateTimer(){
    if (!isPaused && timeLeft > 0){
        timeLeft--;
        updateDisplay();
    }
    if (timeLeft === 0){
        clearInterval(intervalID);
    }
}

function updateDisplay(){
    var displayElement = document.getElementById("timer").querySelector('h1');
    displayElement.textContent = formatTime(timeLeft);
}

function formatTime(seconds){
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60; 
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function pausePlay(){
    isPaused = !isPaused;
    var playBtn = pause_play_el.querySelector('img[src="play-buttton (1).png"]');
    var pauseBtn = pause_play_el.querySelector('img[src="pause.png"]');
    playBtn.style.display = isPaused ? "inline" : "none";
    pauseBtn.style.display = isPaused ? "none" : "inline";
    if(isPaused && timeLeft > 0){
        intervalID = setInterval(updateTimer, 1000);
    }
    else{
        clearInterval(intervalID);
    }
}

/*Pomodoro button*/
var pomodoroBtnEl = document.getElementById("Pomodoro"); //the button that opens the popup
var containerEl = document.getElementById("container1");
var startButtonEl = document.getElementById("Start");
var closeModalEl = document.getElementById("close-modal");

pomodoroBtnEl.onclick = function(){
    closeModals();
    containerEl.style.display = "block";
}
closeModalEl.onclick = function(event){
    if(event.target == closeModalEl){
        containerEl.style.display = "none";
    }
}
startButtonEl.onclick = function startTimer(){
    var inputTimeInMins = parseFloat(document.querySelector(".input1").value);
    if(!isNaN(inputTimeInMins) && inputTimeInMins>0){
        containerEl.style.display = "none"; //hides the popup
        timeLeft = inputTimeInMins*60;
        updateDisplay();
        clearInterval(intervalID);
        intervalID = setInterval(updateTimer, 1000);
    }
}

/*Short Break*/
var shortBrEl = document.getElementById("Short");
var containerEl2 = document.getElementById("container2");
var startButtonEl2 = document.getElementById("StartBr1");
var closeModalEl2 = document.getElementById("close-modal2");

shortBrEl.onclick = function(){
    closeModals();
    containerEl2.style.display = "block";
}

closeModalEl2.onclick = function(){
    containerEl2.style.display = "none";
}

startButtonEl2.onclick = function startTimer(){
    var inputTimeInMins = parseFloat(document.querySelector(".input2").value);
    if(!isNaN(inputTimeInMins) && inputTimeInMins>0){
        containerEl2.style.display = "none";
        timeLeft = inputTimeInMins*60;
        updateDisplay();
        clearInterval(intervalID);
        intervalID = setInterval(updateTimer, 1000);
    }
}

/*Long Break*/
var longBrEl = document.getElementById("Long");
var containerEl3 = document.getElementById("container3");
var startButtonEl3 = document.getElementById("StartBr2");
var closeModalEl3 = document.getElementById("close-modal3");

longBrEl.onclick = function(){
    closeModals();
    containerEl3.style.display = "block";
}

closeModalEl3.onclick = function(){
    containerEl3.style.display = "none";
}

startButtonEl3.onclick = function startTimer(){
    var inputTimeInMins = parseFloat(document.querySelector(".input2").value);
    if(!isNaN(inputTimeInMins) && inputTimeInMins>0){
        containerEl3.style.display = "none";
        timeLeft = inputTimeInMins*60;
        updateDisplay();
        clearInterval(intervalID);
        intervalID = setInterval(updateTimer, 1000);
    }
}

/*restart timer*/
var restartButtonEl = document.getElementById("restart");
restartButtonEl.addEventListener("click", restartTimer);
function restartTimer(){
    timeLeft = 30*60;
    isPaused = true;
    clearInterval(intervalID);
    updateDisplay();
    var playBtn = pause_play_el.querySelector('img[src="play-button (1).png"]');
    var pauseBtn = pause_play_el.querySelector('img[src="pause.png"]');
    playBtn.style.display = "inline"; // Show the play button
    pauseBtn.style.display = "none"; // Hide the pause button
}

function closeModals(){
    containerEl.style.display = "none";
    containerEl2.style.display = "none";
    containerEl3.style.display = "none";
}