// console.log('this is the way');

const formBtn = document.getElementById('close-form')
// console.log(formBtn)

const form = document.querySelector('form')
// console.log(form)

function toggler(){
    form.classList.toggle('hide');

    if(formBtn.innerText === 'X'){
        formBtn.innerText = '+';
    }else{
        formBtn.innerText = 'X';
    }
}

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const emailList = []

function validateForm(){
    if(!nameInput.value && !emailInput.value){
        nameInput.style.border = '2px solid red';
        emailInput.style.border = '2px solid red';
        alert('Ugh! You forgot to enter your name and email');
    }else if(nameInput.value && !emailInput.value){
        nameInput.style.border = '2px solid red';
        alert("Almost, You forgot to enter your email. Don't be lazy");
    }else if(!nameInput.value && emailInput.value){
        emailInput.style.border = '2px solid red';
        alert("Almost, You forgot to enter your name. Don't be lazy");
    }else{
        emailList.push(nameInput.value, emailInput.value)
        displayThankYou();
        console.log(emailList);
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    validateForm();
})

const formContainer = document.getElementById('form-container');
// console.log(formContainer);

function displayThankYou(){
    formContainer.innerText = 'Thank You for subscribing!';
    setTimeout(function(){
        formContainer.remove()
    }, 3000)
}

function removeMessage (){
    formContainer.remove()
}

nameInput.addEventListener('change', function(){
    nameInput.style.border = 'none';
})

emailInput.addEventListener('change', function(){
    emailInput.style.border = 'none';
})

let cart = document.createElement('div');

const main = document.getElementById('main');

let cartItems = 0;

function addToCart(){
    if(cartItems === 0){
        cartItems = 1;
        cart.setAttribute('class', 'cart-display');
        cart.innerText = 'Your Cart: 1 item';
        main.appendChild(cart);
    }else{
        cartItems++;
        cart.innerText = `Your Cart: ${cartItems} items`
    }
}