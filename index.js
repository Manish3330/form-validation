
const Name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const alertSuccess=document.getElementById('alertSuccess');
const alertDanger=document.getElementById('alertDanger');
alertSuccess.style.display="none";
alertDanger.style.display="none";

let validEmail = false;
let validPhone = false;
let validUser = false;
Name.addEventListener('blur', ()=>{
    console.log("name is blurred");
   
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = Name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        Name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        Name.classList.add('is-invalid');
        validUser = false;
    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);
    if(validEmail && validUser && validPhone){
        alertSuccess.style.display="block";
        alertDanger.style.display="none";
        console.log('Phone, email and user are valid. Submitting the form');
    }
    else{
        alertSuccess.style.display="none";
        alertDanger.style.display="block";
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        }
})
