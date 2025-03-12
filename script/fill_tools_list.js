document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("tools-container");
  const template = document.getElementById("tools-card");

  if (!template) {
      console.error("Erreur : l'élément <template> avec l'ID 'tools-card' est introuvable.");
      return;
  }

  window.renderTools = async function (filterType) {
      container.innerHTML = "";
      console.log(filterType);

      try {
          const response = await fetch("tools.json");
          const toolsData = await response.json();
          const filteredTools = toolsData.filter(tool => tool.type === filterType);

          if (filteredTools.length === 0) {
              container.innerHTML = "<p>Aucun outil disponible pour cette catégorie.</p>";
              return;
          }

          filteredTools.forEach(tool => {
              const clone = template.content.cloneNode(true);
              clone.querySelector(".tool-image").src = tool.image;
              clone.querySelector(".tool-image").alt = tool.nom;
              clone.querySelector(".tool-name").textContent = tool.nom;
              container.appendChild(clone);
          });

      } catch (error) {
          console.error("Erreur lors du chargement des outils :", error);
      }
  };

  document.querySelectorAll(".tabs ul li a").forEach(tab => {
      tab.addEventListener("click", function (event) {
          event.preventDefault(); // Empêche le rechargement de la page
          document.querySelector(".tabs ul li.is-active").classList.remove("is-active");
          this.parentElement.classList.add("is-active");
      });
  });

  renderTools("Langage de programmation");
});
