
// Verifying webp support, adding webp or no-webp class for HTML
import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
//Validation
import {validateForms} from "./modules/validation.js";
validateForms('#contact form');

//Hamburger
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

//Rating counter
const counters = document.querySelectorAll(".skills_ratings-counter");
const lines = document.querySelectorAll(".skills_ratings-line span");

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});

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

	//Mailer
	$("form").submit(function(e){
		e.preventDefault();
		if (!$(this).valid()) {
			return;
		}
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function(){
			$(this).find("input").val("");
			$("form").trigger("reset");
			popupOpen();
		});
		return false;
	});

	//Appearance of the description for portfolio

		$(".portfolio_item").each(function(i){
			$(this).hover(function(e) {
				e.preventDefault();
				$(".portfolio_item_info").eq(i).toggleClass("portfolio_item_info_active");
			})
		});

	//Pop up
	function popupOpen(){
		const popup = document.querySelector('.popup');
		const popupContent = document.querySelector('.popup_content');
		const close = document.querySelector('.popup_close');
		const body = document.querySelector('body');
		popup.classList.add("open");
		popupContent.classList.add("open_content");
		body.classList.add("lock");
		close.addEventListener('click', function() {
			popup.classList.remove("open");
			popupContent.classList.remove("open_content");
			body.classList.remove("lock");
		});
	}