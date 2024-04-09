// Function to handle users logout
const logoutFunction = async () => {
  // Sends logout request to the server.
  const response = await fetch('/api/auth/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  // Redirect to home page if logout is successful, or if not, will show an error message.
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

// Event listener for logout button click.
document.querySelector('#logout').addEventListener('click', logoutFunction);
