var hiddenformBurger = document.querySelector(".hiddenform-burger");
var hiddenformMenu = document.querySelector(".hiddenform-menu");
var toggleMenu = function toggleMenu() {
  hiddenformMenu.classList.toggle("is-active");
};
hiddenformBurger.addEventListener("click", toggleMenu);
