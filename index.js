//modal
const navClose = document.querySelector(".header-menu-close");
const navOpen = document.querySelector(".header-menu-open");
const modal = document.querySelector(".modal-menu");

navClose.addEventListener("click", closeMenu);
navOpen.addEventListener("click", openMenu);

function openMenu() {
  navOpen.style.display = "none";
  navClose.style.display = "block";
  modal.style.zIndex = "1";
}
function closeMenu() {
  navClose.style.display = "none";
  navOpen.style.display = "block";
  modal.style.zIndex = "0";
}
