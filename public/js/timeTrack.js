const TimeManager = require('als-time-manager');


const timeManager = new TimeManager();

const startButton = document.getElementById('startButton');
let timerInterval; 
startButton.addEventListener('click', () => {
    const startTime = Date.now(); 
    timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime; 
        const formattedTime = timeManager.formatTime(elapsedTime / 1000); 
        document.getElementById('timerDisplay').textContent = formattedTime; 
    }, 1000); 
});

// Stops the timer when the stop button is clicked
const stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    console.log("Timer stopped because the stop button was clicked.");
});

// Stops timer when the window is closed
window.addEventListener('beforeunload', () => {
    clearInterval(timerInterval);
});

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = timeManager.getCurrentTime();
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    clearInterval(timerInterval); // Stops the current timer 
    // Resets the timer
    document.getElementById('timerDisplay').textContent = '00:00:00';
});