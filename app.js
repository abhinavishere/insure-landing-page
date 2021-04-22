let menuBrg = document.querySelector('.header_nav_hamburger');
let menuClose = document.querySelector('.header_nav_close');
let navLinks = document.querySelector('.header_nav_links');
let menuOpen = false;

menuBrg.addEventListener('click' , openMenu);
menuClose.addEventListener('click' , closeMenu);

function openMenu(e){
    e.preventDefault();
    menuBrg.style.display = 'none';
    menuClose.style.display = 'block';
    navLinks.style.transform = 'scaleX(1)';
}

function closeMenu(e){
    e.preventDefault();
    menuBrg.style.display = 'block';
    menuClose.style.display = 'none';
    navLinks.style.transform = 'scaleX(0)';
}