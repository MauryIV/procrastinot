document.addEventListener('DOMContentLoaded', () => {
    const addProjectButton = document.querySelector('.add-project-button');
    const projectModal = document.getElementById('projectModal');
    const closeModalButtons = document.querySelectorAll('.close-modal-button');
    const projectList = document.getElementById('projectList');

    // Add project button click event listener
    addProjectButton.addEventListener('click', () => {
        projectModal.classList.add('is-active');
    });

    // Close modal button click event listeners
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            projectModal.classList.remove('is-active');
        });
    });

    // Add new project button click event listener
    document.querySelector('.add-new-project-button').addEventListener('click', () => {
        const projectNameInput = document.getElementById('newProjectTitle').value.trim();

        if (projectNameInput) {
            addProject(projectNameInput);
            projectModal.classList.remove('is-active');
            document.getElementById('newProjectTitle').value = '';
        } else {
            alert('Please enter a project name.');
        }
    });
});

// Function to add project to the project list
function addProject(projectName) {
    const project = document.createElement('div');
    project.classList.add('project');
    project.innerHTML = `
        <div class="project-info">
            <span class="project-name">${projectName}</span>
            <button class="button is-small details-button">Details</button>
            <div class="details-section is-hidden">
                <p>Project details go here...</p>
            </div>
        </div>
        <div class="time-adjustment">
            <p>Time Spent:</p>
            <div class="time-display">
                <p><span class="project-time">00:00 Hour(s)</span></p>
            </div>
            <div class="control-buttons">
                <i class="fas fa-arrow-up increase-hour"></i>
                <i class="fas fa-arrow-down decrease-hour"></i>
            </div>
        </div>
        <div class="delete-button">
            <button class="button is-danger is-small delete-project-button">Delete</button>
        </div>
    `;
    projectList.appendChild(project);
}

// Delete project from the project list
document.addEventListener('click', event => {
    if (event.target.classList.contains('delete-project-button')) {
        const projectToDelete = event.target.closest('.project');
        deleteProject(projectToDelete);
    }
});

function deleteProject(project) {
    project.remove();
}
