const TimeManager = require('als-time-manager');
const { $setTimeout, $setInterval, timeToMs } = TimeManager;

const startButtons = document.querySelectorAll('.startButton');
let timerIntervals = {};

// Add event listener for each start button
startButtons.forEach(startButton => {
    startButton.addEventListener('click', () => {
        console.log('Start button clicked');
        const startTime = Date.now(); 
        const todoId = startButton.dataset.todoId;
        timerIntervals[todoId] = setInterval(() => {
            const elapsedTime = Date.now() - startTime; 
            const formattedTime = timeManager.formatTime(elapsedTime / 1000); 
            const timerDisplay = document.getElementById(`timerDisplay_${todoId}`);
            if (timerDisplay) {
                timerDisplay.textContent = formattedTime; 
            }
        }, 1000); 
    });
});

// Stops the timer when the stop button is clicked
const stopButtons = document.querySelectorAll('.stopButton');
stopButtons.forEach(stopButton => {
    stopButton.addEventListener('click', () => {
        console.log('Stop button clicked');
        const todoId = stopButton.dataset.todoId;
        clearInterval(timerIntervals[todoId]);
        console.log(`Timer stopped for todo ${todoId} because the stop button was clicked.`);
    });
});

// Stops timer when the window is closed
window.addEventListener('beforeunload', () => {
    Object.values(timerIntervals).forEach(interval => clearInterval(interval));
});

const resetButtons = document.querySelectorAll('.resetButton');
resetButtons.forEach(resetButton => {
    resetButton.addEventListener('click', () => {
        console.log('reset button clicked');
        const todoId = resetButton.dataset.todoId;
        clearInterval(timerIntervals[todoId]); // Stops the current timer 
        // Resets the timer
        const timerDisplay = document.getElementById(`timerDisplay_${todoId}`);
        if (timerDisplay) {
            timerDisplay.textContent = '00:00:00';
        }
    });
});


const timeManager = new TimeManager();