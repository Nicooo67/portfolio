// Référence aux sections
const aboutSection = document.querySelector("#about-section");
const projectsSection = document.querySelector("#projects-section");

// Afficher les sections avec une animation
setTimeout(function() {
  aboutSection.classList.add("show");
}, 500);
setTimeout(function() {
  projectsSection.classList.add("show");
}, 1000);

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });