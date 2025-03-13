document.addEventListener('DOMContentLoaded', () => {

  const navbarBurgers = document.querySelectorAll('.navbar-burger');

  navbarBurgers.forEach(burger => {
    burger.addEventListener('click', () => {
  
      const targetId = burger.dataset.target;
      const target = document.getElementById(targetId);

      burger.classList.toggle('is-active');
      target.classList.toggle('is-active');
  
      target.querySelectorAll('.navbar-item').forEach(item => {
        item.addEventListener('click', () => {
          burger.classList.remove('is-active');
          target.classList.remove('is-active');
        });
      });
    });
  });
});