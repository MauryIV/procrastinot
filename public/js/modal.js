document.addEventListener('DOMContentLoaded', function () {
  // Event listener for add project modal
  const addProjectButton = document.querySelector('.add-project-button');
  const projectModal = document.getElementById('projectModal');
  const newProjectButton = document.querySelector('.add-new-project-button');
  const titleInput = document.querySelector('#newProjectTitle');
  const descriptionInput = document.querySelector('#newProjectDescription');
  const closeModalButtons = document.querySelectorAll('.close-modal-button');
  let activePage;

  // Add project button click event listener
  addProjectButton.addEventListener('click', (event) => {
    projectModal.classList.add('is-active');
    activePage = event.target.getAttribute('data-page');
  });

  // Add new project event listener
  newProjectButton.addEventListener('click', async function(event) {
    event.preventDefault();
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    if (title && description) {
      const response = await fetch(`/api/${activePage}`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create project');
      }
    } else {
      alert('Please fill out both Title and Description');
    }
  });

  // Close modal button click event listener
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      projectModal.classList.remove('is-active');
    });
  });
});
