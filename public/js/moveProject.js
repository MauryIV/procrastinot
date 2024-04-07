document.addEventListener("DOMContentLoaded", function () {
  const todoButton = document.querySelector('#todo-button');
  const workingButton = document.querySelector('#working-button');
  const completedButton = document.querySelector('#completed-button');
  const deleteButton = document.querySelector('#delete-project-button');

  todoButton.addEventListener('click', async function(event) {
    try {
      event.preventDefault();
      const newModel = 'todo';
      const activeModel = event.currentTarget.getAttribute("data-model");
      const projectId = event.currentTarget.getAttribute("data-id");

      const getData = await fetch(`/api/${activeModel}/${projectId}`);
      const getProjectData = await getData.json();

      const postData = await fetch(`/api/${newModel}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(getProjectData)
      });
    
      if (postData.ok) {
        const deleteData = await fetch(`/api/${activeModel}/${projectId}`, {
          method: 'DELETE'
        });
        if (deleteData.ok) {
          console.log('Data moved successfully.');
          window.location.href = `/${newModel}`;
        } else {
          console.error('Error deleting data.');
        }
      } else {
        console.error('Error posting data.');
      }
    } catch (error) {
      console.error('Error moving data:', error);
    }
  });

  workingButton.addEventListener('click', async function(event) {
    try {
      event.preventDefault();
      const newModel = 'working';
      const activeModel = event.currentTarget.getAttribute("data-model");
      const projectId = event.currentTarget.getAttribute("data-id");

      const getData = await fetch(`/api/${activeModel}/${projectId}`);
      const getProjectData = await getData.json();

      const postData = await fetch(`/api/${newModel}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(getProjectData)
      });
      
      if (postData.ok) {
        const deleteData = await fetch(`/api/${activeModel}/${projectId}`, {
          method: 'DELETE'
        });
        if (deleteData.ok) {
          console.log('Data moved successfully.');
          window.location.href = `/${newModel}`;
        } else {
          console.error('Error deleting data.');
        }
      } else {
        console.error('Error posting data.');
      }
    } catch (error) {
      console.error('Error moving data:', error);
    }
  });

  completedButton.addEventListener('click', async function(event) {
    try {
      event.preventDefault();
      const newModel = 'completed';
      const activeModel = event.currentTarget.getAttribute("data-model");
      const projectId = event.currentTarget.getAttribute("data-id");

      const getData = await fetch(`/api/${activeModel}/${projectId}`);
      const getProjectData = await getData.json();

      const postData = await fetch(`/api/${newModel}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(getProjectData)
      });
    
      if (postData.ok) {
        const deleteData = await fetch(`/api/${activeModel}/${projectId}`, {
          method: 'DELETE'
        });
        if (deleteData.ok) {
          console.log('Data moved successfully.');
          window.location.href = `/${newModel}`;
        } else {
          console.error('Error deleting data.');
        }
      } else {
        console.error('Error posting data.');
      }
    } catch (error) {
      console.error('Error moving data:', error);
    }
  });

  deleteButton.addEventListener('click', async function(event) {
    try {
      event.preventDefault();
      const activeModel = event.currentTarget.getAttribute("data-model");
      const projectId = event.currentTarget.getAttribute("data-id");

      const deleteData = await fetch(`/api/${activeModel}/${projectId}`, {
        method: 'DELETE'
      });
      if (deleteData.ok) {
        console.log('Project deleted successfully.');
        window.location.href = `/${activeModel}`;
      } else {
        console.error('Error deleting data.');
      }
    } catch (error) {
      console.error('Error moving data:', error);
    }
  });
});
