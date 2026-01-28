document.addEventListener('DOMContentLoaded', () => {
// ================= MENU MOBILE =================
const menuButton = document.querySelector('.mobile-menu-icon button');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.mobile-menu-icon .icon');


if (menuButton && mobileMenu && menuIcon) {
menuButton.addEventListener('click', () => {
mobileMenu.classList.toggle('open');


// Troca o ícone
menuIcon.src = mobileMenu.classList.contains('open')
? 'assets/img/Páginas/Header/close-black.svg'
: 'assets/img/Páginas/Header/menu_black.svg';
});
}


// ================= DROPDOWN MOBILE =================
const mobileDropdownLinks = document.querySelectorAll(
'.mobile-menu .nav-item.dropdown > a'
);


mobileDropdownLinks.forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();


const dropdownMenu = link.nextElementSibling;
if (!dropdownMenu) return;


dropdownMenu.classList.toggle('open');
});
});
});