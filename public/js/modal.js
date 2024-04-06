document.addEventListener("DOMContentLoaded", function () {
  // Event listener for add project modal
  const addProjectButton = document.querySelector(".add-project-button");
  const projectModal = document.getElementById("projectModal");
  // Event listener for project details
  const projectDetails = document.querySelectorAll(".project-details");
  const detailsModal = document.getElementById("detailsModal");
  // Event listener doubles for closing each modal
  const closeModalButtons = document.querySelectorAll(".close-modal-button");

  // Add project button click event listener
  addProjectButton.addEventListener("click", () => {
    // Show the modal
    projectModal.classList.add("is-active");
  });

  // Project detail button click event listener
  projectDetails.forEach((details) => {
    details.addEventListener("click", async function (event) {
      // Show the details modal
      detailsModal.classList.add("is-active");
      const projectId = event.target.getAttribute("data-id");
      // Fetch project details from PostgreSQL using the projectId
      // activePage set in specific pages JS
      const response = await fetch(`/${activePage}/${projectId}`);
      console.log(response);
      const projectData = await response.json();
      console.log(projectData);
      console.log(projectData.title);
      // Update the modal content with projectDetails
      document.querySelector("#title").textContent = projectData.title;
      document.querySelector("#description").textContent =
        projectData.description;
    });
  });

  // Close modal button click event listener
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Hide either modal
      projectModal.classList.remove("is-active");
      detailsModal.classList.remove("is-active");
    });
  });
});
