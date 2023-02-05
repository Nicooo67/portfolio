// Récupérer la section de projet
var projectSection = document.querySelector(".project-section");

// Écouter l'événement de défilement de la fenêtre
window.addEventListener("scroll", function () {
  // Récupérer la position de la section de projet
  var projectSectionRect = projectSection.getBoundingClientRect();

  // Vérifier si la section de projet est visible dans la vue
  if (projectSectionRect.top < window.innerHeight && projectSectionRect.bottom >= 0) {
    // Ajouter la classe d'animation à chaque élément de projet
    var projectItems = projectSection.querySelectorAll(".project-item");
    projectItems.forEach(function (item) {
      item.classList.add("animated", "fadeInUp");
    });
  }
});
