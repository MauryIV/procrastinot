const specific = document.getElementById('title');
const startButton = document.getElementById('startButton');
const addButton = document.getElementById('addFifteen');
const subtractButton = document.getElementById('subtractFifteen');
const stopButton = document.getElementById('stopButton');
const activeModel = specific.getAttribute('data-model');
const projectId = specific.getAttribute('data-id');
let timerInterval;
let totalElapsedMinutes = parseInt(specific.getAttribute('data-time'));
let timeCounter = false;

startButton.addEventListener('click', () => {
  startButton.hidden = true;
  stopButton.hidden = false;
  if (!timeCounter) {
    alert('Timer has started.');
    timeCounter = true;
    timerInterval = setInterval(async () => {
      totalElapsedMinutes++;
      try {
        const postData = await fetch(`/api/${activeModel}/timer/${projectId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ time_applied: totalElapsedMinutes }),
        });
        const responseData = await postData.json();
        console.log(responseData);
      } catch (error) {
        console.error('Problem adding minute: ', error);
      }
    }, 60000);
  }
});

addButton.addEventListener('click', async () => {
  totalElapsedMinutes += 15;
  try {
    const postData = await fetch(`/api/${activeModel}/timer/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ time_applied: totalElapsedMinutes }),
    });
    const responseData = await postData.json();
    console.log(responseData);
  } catch (error) {
    console.error('Problem adding 15: ', error);
  }
});

subtractButton.addEventListener('click', async () => {
  if (totalElapsedMinutes > 15) {
    totalElapsedMinutes -= 15;
  } else totalElapsedMinutes = 0;
  try {
    const postData = await fetch(`/api/${activeModel}/timer/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ time_applied: totalElapsedMinutes }),
    });
    const responseData = await postData.json();
    console.log(responseData);
  } catch (error) {
    console.error('Problem subtracting 15: ', error);
  }
});

stopButton.addEventListener('click', () => {
  stopButton.hidden = true;
  startButton.hidden = false;
  if (timeCounter) {
    timeCounter = false;
    clearInterval(timerInterval);
    alert('Timer has stopped.');
  }
});

window.addEventListener('beforeunload', () => {
  clearInterval(timerInterval);
});

function timeTracker() {
  setInterval(async function () {
    const now = dayjs();
    document.getElementById('timer').textContent = now.format(
      'MMM D, YYYY [at] hh:mm:ss a'
    );
    const timeSpent = document.getElementById('timeSpent');
    const activeModel = specific.getAttribute('data-model');
    const projectId = specific.getAttribute('data-id');
    const getData = await fetch(`/api/${activeModel}/${projectId}`);
    const getProjectData = await getData.json();
    if (getProjectData.time_applied == 1) {
      timeSpent.textContent = `Time Spent: ${getProjectData.time_applied} minute`;
    } else {
      timeSpent.textContent = `Time Spent: ${getProjectData.time_applied} minutes`;
    }
  }, 1000);
}

timeTracker();
