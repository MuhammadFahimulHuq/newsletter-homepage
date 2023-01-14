const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close-button");
const menu = document.querySelector(".nav-container-mobile");
const blurEffect = document.querySelector(".blur-bg");
hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
  blurEffect.classList.toggle("active-blur");
});
closeButton.addEventListener("click", function () {
  menu.classList.toggle("active");
  blurEffect.classList.toggle("active-blur");
});
