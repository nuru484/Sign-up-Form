const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

password.addEventListener('change', validatePasswordMatch);
confirmPassword.addEventListener('input', validatePasswordMatch);

function validatePasswordMatch() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity('Passwords do not match ooh');
    console.log('hello 1');
  } else {
    confirmPassword.setCustomValidity('');
    console.log('hello other');
  }
}
