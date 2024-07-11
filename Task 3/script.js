let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;
let lapCounter = 1;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const lapResetBtn = document.getElementById('lapResetBtn');
const lapsList = document.getElementById('laps');

function formatTime(ms) {
    const hours = String(Math.floor(ms / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(3, '0');
    const milliseconds = String(ms % 1000).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function updateTime() {
    const currentTime = new Date().getTime();
    const totalElapsedTime = elapsedTime + (currentTime - startTime);
    display.textContent = formatTime(totalElapsedTime);
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime += new Date().getTime() - startTime;
        startStopBtn.textContent = 'Start';
        lapResetBtn.textContent = 'Reset';
        isRunning = false;
    } else {
        startTime = new Date().getTime();
        timer = setInterval(updateTime, 10);
        startStopBtn.textContent = 'Stop';
        lapResetBtn.textContent = 'Lap';
        isRunning = true;
        updateTime(); // Immediately update the display when starting
    }
}

function lapReset() {
    if (isRunning) {
        const lapTime = formatTime(elapsedTime + (new Date().getTime() - startTime));
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter++}: ${lapTime}`;
        lapsList.appendChild(lapItem);
    } else {
        display.textContent = '00:00:00.000';
        elapsedTime = 0;
        lapCounter = 1;
        lapsList.innerHTML = '';
        startStopBtn.textContent = 'Start';
        lapResetBtn.textContent = 'Lap';
    }
}

startStopBtn.addEventListener('click', startStop);
lapResetBtn.addEventListener('click', lapReset);
