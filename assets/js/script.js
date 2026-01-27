function initHeaderScripts() {
  // Abre/fecha menu mobile e troca ícone
  const menuIcons = document.querySelectorAll('.mobile-menu-icon button'); 
  const menuMobile = document.querySelector('.mobile-menu');
  const icon = document.querySelector('.icon');

  menuIcons.forEach(btn => {
    btn.addEventListener('click', () => {
      menuMobile.classList.toggle('open');

      if (menuMobile.classList.contains('open')) {
        icon.src = "../img/Páginas/Header/close-black.svg";
      } else {
        icon.src = "../img/Páginas/Header/menu_black.svg";
      }
    });
  });

  // Dropdown no mobile
  const mobileDropdowns = document.querySelectorAll('.mobile-menu .nav-item.dropdown > a');

  mobileDropdowns.forEach(drop => {
    drop.addEventListener('click', function(e) {
      e.preventDefault();
      const menu = this.nextElementSibling; 
      menu.classList.toggle('open');
    });
  });
}
