const open = document.getElementById('open');
const close = document.getElementById('close');
const konteynır = document.querySelector('.konteynır');

open.addEventListener('click' , () => konteynır.classList.add('show-nav'));

close.addEventListener('click', () => konteynır.classList.remove('show-nav'));