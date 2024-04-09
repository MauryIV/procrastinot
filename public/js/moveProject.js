// Event listener for DOMContentLoaded event to handle project management buttons.
document.addEventListener("DOMContentLoaded", function () {
  // Function to handle moving project to the todo, working, or completed section.
  const handleMoveProject = async function (event, newModel) {
    try {
      event.preventDefault();
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
  };

  // Event listeners for each project management button.
  const todoButton = document.querySelector('#todo-button');
  const workingButton = document.querySelector('#working-button');
  const completedButton = document.querySelector('#completed-button');
  const deleteButton = document.querySelector('#delete-project-button');

  todoButton.addEventListener('click', (event) => handleMoveProject(event, 'todo'));
  workingButton.addEventListener('click', (event) => handleMoveProject(event, 'working'));
  completedButton.addEventListener('click', (event) => handleMoveProject(event, 'completed'));

  // Event listener for project delete button.
  deleteButton.addEventListener('click', async function (event) {
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
