// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('message').addEventListener('blur', validateMessage);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z ]{3,50}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}



function validateEmail(){
    const email= document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
    if(!re.test(email.value)){
      email.classList.add('is-invalid');
    } else {
      email.classList.remove('is-invalid');
    }
}

function validatePhone(){
    const phone= document.getElementById('phone');
    const re = /[0][1-9]{1}[0-9]{8}$/;
  
    if(!re.test(phone.value)){
      phone.classList.add('is-invalid');
    } else {
      phone.classList.remove('is-invalid');
    }
}

function validateMessage() {
  const message = document.getElementById('message');
  const re = /^[a-zA-Z0-9_\-\.\?\+\! ]{10,10000}$/;

  if(message.value.length<10){
    message.classList.add('is-invalid');
  } else {
    message.classList.remove('is-invalid');
  }
}
