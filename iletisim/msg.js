const open = document.getElementById('open');
const close = document.getElementById('close');
const konteynır = document.querySelector('.konteynır');

open.addEventListener('click' , () => konteynır.classList.add('show-nav'));

close.addEventListener('click', () => konteynır.classList.remove('show-nav'));

document.querySelector('#name-box').textContent = localStorage.getItem("name");
document.querySelector('#email-box').textContent = localStorage.getItem("email");
document.querySelector('#msg-box').textContent = localStorage.getItem("message");
