document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.querySelector('.edit-profile-button');
    const deleteButton = document.getElementById('delete-profile');
  
    editButton.addEventListener('click', () => {
      // Add functionality to edit profile
      // You can open a modal or redirect to an edit profile page
    });
  
    deleteButton.addEventListener('click', () => {
      const confirmation = confirm('Are you sure you want to delete your profile? This action cannot be undone.');
      if (confirmation) {
        // Add functionality to delete profile
      }
    });
  });
  