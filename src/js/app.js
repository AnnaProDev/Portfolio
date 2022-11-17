import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeElem = document.querySelector(".menu_close");

hamburger.addEventListener("click", () => {
	menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
	menu.classList.remove("active");
});

