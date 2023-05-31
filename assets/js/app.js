const hamburger = document.querySelector(".fa-bars");

const responsiveNavbar = document.querySelector(".responsive-navbar");

hamburger.addEventListener("click", function () {
  responsiveNavbar.classList.toggle("responsive_design");
});
