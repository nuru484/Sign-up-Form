const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const passwordRequiredNumber =
  document.getElementsByClassName('passwordNotMatch');

password.addEventListener('input', validatePasswordMatch);
confirmPassword.addEventListener('input', validatePasswordMatch);

function validatePasswordMatch() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity('Passwords do not match');
    passwordRequiredNumber.append('Passwords do not match');
  } else {
    confirmPassword.setCustomValidity('');
    confirmPassword.style.cssText = 'border: none;';
    passwordRequiredNumber.textContent = '';
  }
}
