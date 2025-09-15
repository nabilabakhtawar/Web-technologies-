// Get the form and input elements
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const rememberMeCheckbox = document.querySelector('#rememberMe');

// On page load, pre-fill username if remembered
if (localStorage.getItem('rememberedUsername')) {
  usernameInput.value = localStorage.getItem('rememberedUsername');
  rememberMeCheckbox.checked = true;
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (rememberMeCheckbox.checked) {
    localStorage.setItem('rememberedUsername', username);
  } else {
    localStorage.removeItem('rememberedUsername');
  }

  if (username === '' || password === '') {
    alert('Please fill in username and password');
    return;
  }

  // add real authentication here
  if (username === 'admin' && password === 'admin123') {
    alert('Login successful!');
  } else {
    alert('Invalid username or password!');
  }
});