const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const loginForm = document.getElementById('loginForm');
const showPasswordText = document.getElementById('showPassword');
const loginContainer = document.querySelector('.login-container');

showPasswordText.addEventListener('click', showPassword);


//Show/Hide Password
function showPassword() {
    if (loginPassword.type === 'password') {
        loginPassword.type = 'text';
        showPasswordText.style.color = 'red';
    } else {

    }
}

//Simple Validation
loginForm.addEventListener('submit', submitValidation);

function submitValidation(e) {
    e.preventDefault();

    //User Validation
    if (loginUsername.value === '' || loginUsername.value.length < 3) {
        showError(loginUsername, 'User name cannot be empty & must be > 3.');
    } else {
        showSuccess(loginUsername);
    }

    //Password Validation
    if (loginPassword.value === '' || loginPassword.value.length < 6) {
        showError(loginPassword, 'Password cannot be empty or less than 6.')
    } else {
        showSuccess(loginPassword);
    }
}

// Show Error Message
function showError(input, message) {
    const formField = input.parentElement;
    formField.className = 'form-field error';
    if (formField.className === 'form-field error') {
        const alert_message = formField.querySelector('.alert-message');
        alert_message.style.visibility = 'visible';
        alert_message.style.color = 'red';
        alert_message.textContent = message;
    }
}

// Show Success Message
function showSuccess(input) {
    const formField = input.parentElement;
    formField.className = 'form-field success';
    if (formField.className === 'form-field success') {
        const alert_message = formField.querySelector('.alert-message');
        alert_message.style.visibility = 'hidden';
    }
}

// Request Form
const requestForm = document.querySelector('.form-request');
const showRequestForm = document.querySelector('.reset-password');

requestForm.style.display = 'none';

showRequestForm.addEventListener('click', (e) => {
   e.preventDefault();
   if (requestForm.style.display !== 'block') {
       loginContainer.style.height = '45rem';
       requestForm.style.display = 'block';
   } else {
       requestForm.style.height = 'initial';
   }
});

requestForm.addEventListener('submit', request);

function request(e) {
    e.preventDefault();

    if (requestForm.style.display === 'block') {
        const requestEmail = document.getElementById('requestEmail');

        if (requestEmail.value === '') {
            showError(requestEmail, 'Email cannot be empty.');
        } else {
            showSuccess(requestEmail);
        }
    }
}
