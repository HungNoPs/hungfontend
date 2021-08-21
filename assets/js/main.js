window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
/* ----------------------------- */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav__menu");
const navClose = document.querySelector(".nav-close");
const listLink = document.querySelectorAll(".nav__link");
listLink.forEach((e) => {
  e.addEventListener("click", () => navMenu.classList.remove("show"));
});
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show");
});
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

/* ---------------------------------- */

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  //reset: true,
});
sr.reveal(`.heading, .menu-content, .title p`, {
  origin: "top",
  interval: 100,
});
sr.reveal(`.testimonial-content, .about-image`, {
  origin: "right",
  interval: 100,
});
sr.reveal(`.contact-form, .about-desc`, {
  origin: "left",
  interval: 100,
});
sr.reveal(`.btn,.expert-content`, {
  origin: "bottom",
  interval: 100,
});
