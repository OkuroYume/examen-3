var hiddenformBurger = document.querySelector(".hiddenform-burger");
var hiddenformMenu = document.querySelector(".hiddenform-menu");
var hiddenformArrow = document.querySelector(".hiddenform-arrow");
var toggleMenu = function toggleMenu() {
  hiddenformMenu.classList.toggle("is-active");
  hiddenformArrow.classList.toggle("rotated");
};
hiddenformBurger.addEventListener("click", toggleMenu);
