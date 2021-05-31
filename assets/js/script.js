var burgerMenu = document.querySelector('.burger__menu');
var headerMenu = document.querySelector(".burger__menu__list");
var headerOverlay = document.querySelector('.menu__overlay');
var body = document.querySelector('body');

function toggleBurgerMenu(burger, menu, overlay) {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('stop__scroll');
}

burgerMenu.onclick = function () {
    toggleBurgerMenu(burgerMenu, headerMenu, headerOverlay);
}

headerOverlay.onclick = function () {
    toggleBurgerMenu(burgerMenu, headerMenu, headerOverlay);
}