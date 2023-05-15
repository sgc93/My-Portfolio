let hamMenuIcon = document.getElementById("menu-icon");
let navBar = document.getElementById("navbar");
let navLink = navBar.querySelectorAll("a");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("bx-x");
});
navLink.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("bx-x");
  });
});

// handle toggel icon navbar

// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("bx-x");
//   navbar.classList.toggle("active");
// };

// handle scroll section's active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // handle sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js

const typed = new Typed(".multiple-text", {
  strings: ["Full Stack Developer", "Designer", "App Developer"],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var lang = {
  html: "100%",
  css: "90%",
  javascript: "70%",
  php: "55%",
  angular: "65%",
};

var multiply = 4;

$.each(lang, function (language, pourcent) {
  var delay = 700;

  setTimeout(function () {
    $("#" + language + "-pourcent").html(pourcent);
  }, delay * multiply);

  multiply++;
});
