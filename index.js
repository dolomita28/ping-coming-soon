const button = document.querySelector('.btn');
const input = document.querySelector('#email');
const validator = document.querySelector('.validator');

//regexp to validate e-mail
const regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//show validator messages 
const notValid = ()=>{
    validator.classList.remove('hidden'); 
    input.classList.add('error');     
}
//hides validator messages
const valid = () => {
    validator.classList.add('hidden');
    input.classList.remove('error');            
}

// check whether email is a valid email
const checkValidMail = () => {
    const mail = input.value;
    if (mail === ''){        
        validator.innerHTML = 'Whoops! It looks like you forgot to add your email';
    }
    else{
        validator.innerHTML = 'Please provide a valid email address';
    }
    if (regExp.test(mail)){
        valid();
    }
    else {
        notValid();
    }
}

//listen to click event
button.addEventListener('click',(e)=>{
    e.preventDefault();
    checkValidMail();
})
// listen to input event on every input field
input.addEventListener('input', ()=> valid(input))
