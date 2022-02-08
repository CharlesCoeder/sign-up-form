let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
const errorMessage = document.getElementById('passworderror')
const submit = document.getElementById('submitbutton');

submit.addEventListener('click', (e) => {
    if (password.value != confirmPassword.value){
        password.classList.add('nomatch');
        confirmPassword.classList.add('nomatch');
        errorMessage.textContent = "Passwords do not match";
        e.preventDefault();
    }

})
