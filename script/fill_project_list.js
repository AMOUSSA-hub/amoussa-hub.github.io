document.addEventListener("DOMContentLoaded", () => {
    fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            let projectList = document.getElementById("repoGrid");
            let template = document.getElementById("project-card");

            data.forEach(projet => {
                let clone = template.content.cloneNode(true);

                // Mise à jour des informations
                clone.querySelector(".cell").href = projet.link;
                clone.querySelector(".project-name").textContent = projet.name;
                clone.querySelector(".project-description").textContent = projet.description;
                clone.querySelector(".project-image").src = projet.image;

                let list_language = clone.querySelector("#title-div");


                projet.technoUsed.forEach(tech => {
                    let tag = document.createElement("span");
                    tag.classList.add("tag");
                    tag.classList.add("is-link");
                    tag.style.marginRight = "5px";
                    tag.textContent = tech;
                    list_language.appendChild(tag);
                });

                // Ajout au conteneur
                projectList.appendChild(clone);
            });
        })
        .catch(error => console.error("Erreur de chargement du JSON :", error));
});
