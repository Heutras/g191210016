const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click' , () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.collectapi.com/imdb/imdbSearchByName?query=inception");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "apikey 7eKXqq3eRVaO5hCYbiLHEv:2R3Vi8iiFxDEjgZJlQfPbX");

xhr.send(data);