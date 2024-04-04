// document.addEventListener('DOMContentLoaded', () => {
    const addProjectButton = document.querySelector('.add-project-button');
    const projectModal = document.getElementById('projectModal');
    const closeModalButtons = document.querySelectorAll('.close-modal-button');
    const projectList = document.getElementById('projectList');
    let totalTime = 0; // Total time spent in minutes

    // Add project button click event listener
    addProjectButton.addEventListener('click', () => {
        // Show the modal
        projectModal.classList.add('is-active');
    });

    // Close modal button click event listener
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hide the modal
            projectModal.classList.remove('is-active');
        });
    });

    // Function to adjust time spent by the hour
    function adjustTimeByHour(increase) {
        if (increase) {
            totalTime += 60; // Increase by 1 hour (60 minutes)
        } else {
            totalTime -= 60; // Decrease by 1 hour (60 minutes)
        }
        updateTimeDisplay();
    }

    // Function to update time display
    function updateTimeDisplay() {
        const hours = Math.floor(totalTime / 60);
        const minutes = totalTime % 60;
        const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes} Hour(s)`;
        document.querySelectorAll('.project-time').forEach(span => {
            span.textContent = formattedTime;
        });
    }

    // Increase hour button click event listener
    document.querySelector('.increase-hour').addEventListener('click', () => {
        adjustTimeByHour(true);
    });

    // Decrease hour button click event listener
    document.querySelector('.decrease-hour').addEventListener('click', () => {
        adjustTimeByHour(false);
    });

    // Function to add project to the project list
    function addProject(projectName) {
        const project = document.createElement('div');
        project.classList.add('project');

        const deleteButton = document.createElement('div');
        deleteButton.classList.add('delete-button');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('button', 'is-danger', 'is-small', 'delete-project-button');
        deleteBtn.textContent = 'Delete';
        deleteButton.appendChild(deleteBtn);

        const projectInfo = document.createElement('div');
        projectInfo.classList.add('project-info');
        projectInfo.innerHTML = `
            <span class="project-name">${projectName}</span>
            <button class="button is-small details-button">Details</button>
            <div class="details-section is-hidden">
                <!-- Project details here -->
                <p>Project details go here...</p>
            </div>
        `;

        const timeAdjustment = document.createElement('div');
        timeAdjustment.classList.add('time-adjustment');
        timeAdjustment.innerHTML = `
            <p>Time Spent:</p>
            <!-- Time display -->
            <div class="time-display">
                <p><span class="project-time">00:00 Hour(s)</span></p>
            </div>
            <!-- Controls for increasing and decreasing time -->
            <div class="control-buttons">
                <i class="fas fa-arrow-up increase-hour"></i>
                <i class="fas fa-arrow-down decrease-hour"></i>
            </div>
        `;

        project.appendChild(deleteButton);
        project.appendChild(projectInfo);
        project.appendChild(timeAdjustment);
        projectList.appendChild(project);
    }

    // Delete project from the project list
    function deleteProject(project) {
        project.remove();
    }

    // Delete project button click event listener
    document.addEventListener('click', event => {
        if (event.target.classList.contains('delete-project-button')) {
            const projectToDelete = event.target.closest('.project');
            deleteProject(projectToDelete);
        }
    });

    // Hide delete button if no projects are present initially
    if (projectList.children.length === 0) {
        document.querySelectorAll('.delete-project-button').forEach(button => {
            button.style.display = 'none';
        });
    }

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
    // Add event listener to the modal footer button
document.querySelector('.add-new-project-button').addEventListener('click', () => {
    const projectNameInput = document.getElementById('newProjectTitle').value.trim();

    if (projectNameInput) {
        // Your existing code for creating a new project here

        // Clear the modal input field
        document.getElementById('newProjectTitle').value = '';

    } else {
        alert('Please enter a project name.');
    }
});

    document.querySelector('.add-new-project-button').addEventListener('click', () => {
        const projectNameInput = document.getElementById('newProjectTitle').value.trim();

        if (projectNameInput) {
            const project = document.createElement('div');
            project.classList.add('project');
            project.innerHTML = `
                <div class="project-info">
                    <span class="project-name">${projectNameInput}</span>
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
            projectModal.classList.remove('is-active');
            document.getElementById('newProjectTitle').value = '';
        } else {
            alert('Please enter a project name.');
        }
    });
});


