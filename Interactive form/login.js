const loginForm = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const validPassword = document.getElementById('pasword-validation');
const login = document.getElementById('login');
const description = document.querySelector('.password-description');
const validity = document.querySelector('.password-validation');

login.addEventListener('click', (e)=>{
  e.preventDefault();
  let inputEmail = email.value;
  let inputPassword = password.value;

  if (!inputEmail.includes('@') || !inputEmail.includes('.')){
    validity.style.display = 'block'
    validity.style.background = 'red'
    description.style.display = 'block'
    description.textContent = `Invalid email: email must include '@' and '.' `;
    inputEmail = ''
  } 
  else if(inputPassword.length < 8){
    validity.style.display = 'block'
    validity.style.background = 'orange'
    description.style.display = 'block'
    description.textContent = `password is week: password must be at least 8 characters`;
    inputEmail = ''
  }
  else {
    description.style.display = 'block'
    description.textContent = `login was successful`;
  }
  console.log('yes')
})