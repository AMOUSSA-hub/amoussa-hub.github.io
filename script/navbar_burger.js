document.addEventListener('DOMContentLoaded', () => {
  // Sélectionne tous les éléments avec la classe "navbar-burger"
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Si on a au moins un burger, on lui ajoute un événement click
  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Récupère la cible du menu via l'attribut data-target
        const targetId = el.dataset.target;
        const target = document.getElementById(targetId);

        // Bascule la classe "is-active" sur le burger et le menu
        el.classList.toggle('is-active');
        target.classList.toggle('is-active');
      });
    });
  }
});
