// Get the form elements
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const rememberMeCheckbox = document.querySelector('input[type="checkbox"]');
const loginButton = document.querySelector('.btn');

// On page load, check if "Remember Me" is checked and fill the username if stored
window.onload = () => {
  const storedUsername = localStorage.getItem('username');
  if (storedUsername) {
    usernameInput.value = storedUsername;
    rememberMeCheckbox.checked = true;
  }
};

// Handle form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  
  // Validate inputs
  if (username === '' || password === '') {
    alert("Please fill in both username and password.");
    return;
  }
  
  // Check the "Remember Me" checkbox
  if (rememberMeCheckbox.checked) {
    localStorage.setItem('username', username);  // Save username in localStorage
  } else {
    localStorage.removeItem('username');  // Remove username from localStorage if unchecked
  }

  // You can add real authentication here later
  if (username === 'admin' && password === 'admin123') {
    alert("Login successful!");
  } else {
    alert("Invalid username or password!");
  }
  
  // Clear form fields after submission
  usernameInput.value = '';
  passwordInput.value = '';
  rememberMeCheckbox.checked = false;
});
