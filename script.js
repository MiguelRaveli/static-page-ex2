const nav = document.querySelector(".navBar");
const menuIconOpen = document.querySelector(".menuIconOpen");
const menuIconClose = document.querySelector(".menuIconClose");
const width = document.body.clientWidth;
menuIconOpen.addEventListener("click", () => {
  nav.classList.add("show");
});

menuIconClose.addEventListener("click", () => {
  nav.classList.remove("show");
});

window.addEventListener("load", (event) => {
  if (width >= 1025) {
    nav.classList.add("show");
  }
});
