function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "assets/img/Páginas/Header/menu_black.svg";
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "assets/img/Páginas/Header/close-black.svg";
  }
}

// Dropdown no mobile 
const mobileDropdowns = document.querySelectorAll('.mobile-menu .nav-item.dropdown > a'); mobileDropdowns.forEach(drop => { drop.addEventListener('click', function (e) { e.preventDefault(); 
  const menu = this.nextElementSibling; 
  menu.classList.toggle('open'); 
}); 
}); 

window.addEventListener('resize', () => {
  const menuMobile = document.querySelector('.mobile-menu');
  const icon = document.querySelector('.icon');

  if (window.innerWidth > 730) {
    menuMobile.classList.remove('open');
    icon.src = "assets/img/Páginas/Header/menu_black.svg";
  }
});