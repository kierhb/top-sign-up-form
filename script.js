const submitBtn = document.querySelector('#submit-btn');

const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')

submitBtn.addEventListener('click', function() {
    if (password.value === confirmPassword.value) {
        alert("Login successfully!")
    } else {
        alert("Mismatched password, please try again.")
    }
})