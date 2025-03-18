document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        
        if (target) {
          const offset = target.getBoundingClientRect().top + window.scrollY - 60; // Décalage de 20px
          window.scrollTo({
            top: offset,
            behavior: "smooth"
          });
        }
      });
    });
  });
  