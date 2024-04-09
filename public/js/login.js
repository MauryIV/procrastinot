// handles user login
const loginFunction = async (event) => {
  event.preventDefault();

  // Gets user input.
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // Checks if email and password are given
  if (email && password) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      console.error(response.error);
    }
  }
};

// Event listener for login form submission
document.querySelector('.login-form').addEventListener('submit', loginFunction);
