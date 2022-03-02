//modal
const navClose = document.querySelector(".header-menu-close");
const navOpen = document.querySelector(".header-menu-open");
const modal = document.querySelector(".modal-menu");
const body = document.querySelector("body");

navClose.addEventListener("click", closeMenu);
navOpen.addEventListener("click", openMenu);

function openMenu() {
  body.style.overflowY = "hidden";
  navOpen.style.display = "none";
  navClose.style.display = "block";
  modal.style.zIndex = "2";
}
function closeMenu() {
  navClose.style.display = "none";
  navOpen.style.display = "block";
  modal.style.zIndex = "0";
}
