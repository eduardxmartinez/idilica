//modal
const navClose = document.querySelector(".header-menu-close");
const navOpen = document.querySelector(".header-menu-open");
const modal = document.querySelector(".nav");
const body = document.querySelector("body");

navClose.addEventListener("click", closeMenu);
navOpen.addEventListener("click", openMenu);

function openMenu() {
  body.style.overflowY = "hidden";
  navOpen.style.display = "none";
  navClose.style.display = "block";
  modal.style.display = "flex";
}
function closeMenu() {
  body.style.overflowY = "scroll";
  navClose.style.display = "none";
  navOpen.style.display = "block";
  modal.style.display = "none";
}
