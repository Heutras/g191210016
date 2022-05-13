const open = document.getElementById('open');
const close = document.getElementById('close');
const konteynır = document.querySelector('.konteynır');

open.addEventListener('click' , () => konteynır.classList.add('show-nav'));

close.addEventListener('click', () => konteynır.classList.remove('show-nav'));

function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
    if(type){
        input.classList.remove("error");
        input.classList.add("success");
    }
    else{
        input.classList.remove("success");
        input.classList.add("error");
    }
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#contactForm");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function (event) {
	event.preventDefault();
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["emailAddress"], EMAIL_REQUIRED, EMAIL_INVALID);
	if (nameValid && emailValid) {        
        localStorage.setItem("name",form.elements["name"].value);
        localStorage.setItem("email",form.elements["emailAddress"].value);
        localStorage.setItem("message",form.elements["message"].value);
		alert("Mesajınız alınmıştır.");
        location.href = 'msg.html';

	}
});