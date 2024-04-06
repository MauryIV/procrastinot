let activePage = 'todo'


const TimeManager = require('als-time-manager');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const routes = require('./routes');
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function CompletedProjects() {
  const [projects, setProjects] = useState([
    // Sample project data (replace with actual project data)
    { id: 1, title: 'Project 1', deadline: new Date('2024-04-10'), status: 'on time', timeSpent: 0 },
    { id: 2, title: 'Project 2', deadline: new Date('2024-03-20'), status: 'late', timeSpent: 0 },
    { id: 3, title: 'Project 3', deadline: new Date('2024-04-25'), status: 'in good standing', timeSpent: 0 }
  ]);

  // Function to update project status based on deadline
  const updateProjectStatus = () => {
    const currentDate = new Date();
    const updatedProjects = projects.map(project => {
      if (currentDate > project.deadline) {
        return { ...project, status: 'Late' };
      } else if (currentDate < project.deadline) {
        return { ...project, status: 'On time' };
      } else {
        return { ...project, status: 'In good standing' };
      }
    });
    setProjects(updatedProjects);
  };

  // Timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      setProjects(prevProjects => {
        return prevProjects.map(project => {
          return { ...project, timeSpent: project.timeSpent + 1 };
        });
      });
    }, 1000); // Update time every second

    // Clean up the interval
    return () => clearInterval(intervalId);
  }, []);

  // Format time to HH:MM:SS
  const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <h2>Completed Projects</h2>
      <p>Total Time: 00:00 Hour(s)</p>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <span>{project.title}</span>
            <span>Status: {project.status}</span>
            <span>Time Spent: {formatTime(project.timeSpent)}</span>
            <button>Edit</button>
            <button>Start</button>
            <button>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Render the CompletedProjects component
ReactDOM.render(
  <CompletedProjects />,
  document.getElementById('completed-projects-container')
);


dotenv.config();
const app = express();

// middleware
app.use(bodyParser.json());
// other middleware?


sequelize.authenticate()
.then(() => {
    console.log('Database connection successful')
})
.catch(err => {
    console.error('Database connection failed:', err);
});

// Route Def
app.use('/api', routes);

// error for middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });

// starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});

