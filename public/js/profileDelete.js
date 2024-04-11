const deleteProfile = document.querySelector('#delete-profile');

deleteProfile.addEventListener('click', async function(event) {
  try {
    event.preventDefault();
    const userId = event.currentTarget.getAttribute("data-id")
    const deleteData = await fetch(`/api/auth/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (deleteData.ok) {
      console.log('Profile deleted successfully.');
      window.location.href = '/';
    } else {
      console.error('Error deleting data.');
    }
  } catch (error) {
    console.error('Error moving data:', error);
  }
});
