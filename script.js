let Button = document.getElementById('submit-button');
let FirstNameInput = document.getElementById('first-name-input');
let firstNameError = document.getElementById('first-name-error');
let emptyFirstName = document.getElementById('empty-first-name');


let LastNameInput = document.getElementById('last-name-input');
let LastNameError = document.getElementById('last-name-error');
let emptyLastname = document.getElementById('empty-last-name');

let Email = document.getElementById('email');
let EmailError = document.getElementById('email-error');
let emptyEmail = document.getElementById('empty-email');

let PhoneInput = document.getElementById('phone');
let IncorrectNumber = document.getElementById('incorrect-number');
let emptyPhone = document.getElementById('empty-phone');

let Password = document.getElementById('password');
let IncorrectPassword = document.getElementById('incorrect-password');
let emptyPassword = document.getElementById('empty-password');

let verifyPassword = document.getElementById('Verify-Password');
let verifyPasswordError = document.getElementById('verify-password-error');
let emptyVerifyPassword = document.getElementById('empty-verify-password');

function first(){
  if (FirstNameInput.value =='') {
    emptyFirstName.classList.remove('hide');
  }else if (FirstNameInput.value == Number){
    firstNameError.classList.remove('hide');
  }

}

function verifyPasswords(){
  if (verifyPassword.value =='') {
    emptyVerifyPassword.classList.remove('hide');
  }else if (FirstNameInput.value == Number){
    verifyPasswordError.classList.remove('hide');
  }
}

function checkMatch(){
  if (verifyPassword.value !== password) {
    emptyVerifyPassword.classList.remove('hide');
  }
}

function last(){
  if (LastNameInput.value =='') {
    emptyLastname.classList.remove('hide');
  }else if (LastNameInput.value == Number){
    LastNameError.classList.remove('hide');
  }

}

function email(){
  if (Email.value =='') {
    emptyEmail.classList.remove('hide');
  }else if (Email.value == Number){
    EmailError.classList.remove('hide');
  }

}

function phone(){
  if (PhoneInput.value != Number) {
    emptyPhone.classList.remove('hide');
  }else if (PhoneInput.value == Number){
    IncorrectNumber.classList.remove('hide');
  }

}

function password(){
  if (Password.value =='') {
    emptyPassword.classList.remove('hide');
  }else if (Password.value != Number){
    IncorrectPassword.classList.remove('hide');
  }
}

function special() {
  if (passwordInput.value.length != 8){
    IncorrectPassword.classList.remove('hide');
  } else if (Password.value.length != 8){
    console.log('balablue');
  }
}

Button.addEventListener('click', function (e) {
  e.preventDefault();
  first()
  last()
  email()
  phone()
  password()
})





