'use strict';

let sliderDark = document.querySelector('.slider-dark');
let headMenu = document.querySelector('.head-menu');
let menuClose = document.querySelector('.close-menu');

function toggleMenu() {
    sliderDark.classList.toggle('hidden');
}

headMenu.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);