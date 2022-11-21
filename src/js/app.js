import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeElem = document.querySelector(".menu_close");
const links = document.querySelectorAll(".menu_list li")


hamburger.addEventListener("click", () => {
	menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
	menu.classList.remove("active");
});

links.forEach((link) => {
	link.addEventListener("click", () => {
		menu.classList.remove("active");
	});
});

const counters = document.querySelectorAll(".skills_ratings-counter");
const lines = document.querySelectorAll(".skills_ratings-line span");

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});

//Validation
function validateForms(form){
	$(form).validate({
		rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				agree: "required",
		},
		messages: {
				name: {
					required: "Please specify your name",
					minlength: jQuery.validator.format("Enter {0} symbols!")
				},
				email: {
				required: "We need your email address to contact you",
				email: "Your email address must be in the format of name@domain.com"
				},
				agree: "Please accept our policy",
		}
	});
};

validateForms('#contact form');

	//Smooth scroll and pageup
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1600) {
			$(".pageup").fadeIn();
		} else {
			$(".pageup").fadeOut();
		}
	});

	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
			window.location.hash = hash;
			});
		} 
	});