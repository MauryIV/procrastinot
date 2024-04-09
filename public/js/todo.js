// Imports required dependencies and modules
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const routes = require('./routes');
const React = require('react');
const ReactDOM = require('react-dom');
const TimeManager = require('als-time-manager');

// For managing completed projects
function CompletedProjects() {
  const [projects, setProjects] = React.useState([
    { id: 1, title: 'Project 1', deadline: new Date('2024-04-10'), status: 'on time', timeSpent: 0, timerId: null },
    { id: 2, title: 'Project 2', deadline: new Date('2024-03-20'), status: 'late', timeSpent: 0, timerId: null },
    { id: 3, title: 'Project 3', deadline: new Date('2024-04-25'), status: 'in good standing', timeSpent: 0, timerId: null }
  ]);

  // Function to start a timer for a project
  const startTimer = projectId => {
    const startTime = Date.now();
    const timerId = TimeManager.$setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const updatedProjects = projects.map(project => {
        if (project.id === projectId) {
          return { ...project, timeSpent: project.timeSpent + 1 };
        }
        return project;
      });
      setProjects(updatedProjects);
    }, 1000);
    const updatedProjects = projects.map(project => {
      if (project.id === projectId) {
        return { ...project, timerId: timerId };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  // Function to stop a timer for a project
  const stopTimer = projectId => {
    const updatedProjects = projects.map(project => {
      if (project.id === projectId) {
        TimeManager.$clearInterval(project.timerId);
        return { ...project, timerId: null };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  // Function to format time in proper format.
  const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Creates project elements for rendering
  const projectElements = projects.map(project => {
    return React.createElement(
      'li',
      { key: project.id },
      React.createElement('span', null, project.title),
      React.createElement('span', null, 'Status: ' + project.status),
      React.createElement('span', null, 'Time Spent: ' + formatTime(project.timeSpent)),
      React.createElement('button', { onClick: () => startTimer(project.id) }, 'Start'),
      React.createElement('button', { onClick: () => stopTimer(project.id) }, 'Stop'),
      React.createElement('button', null, 'Complete')
    );
  });

  // Creates list element and container element for rendering
  const listElement = React.createElement('ul', null, projectElements);
  const titleElement = React.createElement('h2', null, 'Completed Projects');
  const timeElement = React.createElement('p', null, 'Total Time: 00:00 Hour(s)');
  const containerElement = React.createElement(
    'div',
    null,
    titleElement,
    timeElement,
    listElement
  );

  return containerElement;
}

// Renders the CompletedProjects component
ReactDOM.render(
  React.createElement(CompletedProjects, null),
  document.getElementById('completed-projects-container')
);

// Configuring environment variables
dotenv.config();
const app = express();

// Middleware setup
app.use(bodyParser.json());

// Database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });

// Route def.
app.use('/api', routes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Starts the server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
