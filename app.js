const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
const checkTogglePassword = document.querySelector('#checkTogglePassword');
const checkPassword = document.querySelector('#checkPassword');

togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

checkTogglePassword.addEventListener('click', function (e) {
    const type = checkPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    checkPassword.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});