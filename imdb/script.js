const open = document.getElementById('open');
const close = document.getElementById('close');
const konteynır = document.querySelector('.konteynır');

open.addEventListener('click' , () => konteynır.classList.add('show-nav'));

close.addEventListener('click', () => konteynır.classList.remove('show-nav'));

const data = null;

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        var jsonResponse = JSON.parse(this.responseText);
		console.log(jsonResponse);
        renderMovies(jsonResponse);

	}
});

function renderMovies(moviesJson) {
    const moviesDiv = document.querySelector('.movies');
    moviesJson.forEach(movie => { 
        let movieWrapper = document.createElement("div");
        movieWrapper = `<div><img src='${movie.image}' class='görsel' /> <div class='block movie-2'> <h3>${movie.name}</h3> <hr> <p>${movie.description}</p> </div> </div><hr>`;
        moviesDiv.innerHTML += movieWrapper;
    });

}

xhr.open("GET",  "https://60aac00b66f1d000177732a6.mockapi.io/movies");

xhr.send(data);