const linkUno = document.getElementById('header-link1');
const linkDos = document.getElementById('header-link2');
const acordeon1 = document.querySelector('.header-acordeon1');
const acordeon2 = document.querySelector('.header-acordeon2');
const arrowUno = document.querySelector('.header-arrow1');
const arrowDos = document.querySelector('.header-arrow2');
const hamburguer = document.querySelector('.header-hamburguer');

//Selección de elementos para el modal
const closeModal = document.querySelector('.header-logo-modal');
const modal = document.querySelector('.header-modal');
const linkModalUno = document.querySelector('.header-nav-link-modal1');
const linkModalDos = document.querySelector('.header-nav-link-modal2');
const arrowModalUno = document.querySelector('.header-arrow1-modal');
const arrowModalDos = document.querySelector('.header-arrow2-modal');
const acordeonModalUno = document.querySelector('.header-acordeon1-modal');
const acordeonModalDos = document.querySelector('.header-acordeon2-modal');



// Eventos para abrir y cerrar los links del header en desktop
linkUno.addEventListener('click', () => {
    acordeon1.classList.toggle('active');
    arrowUno.classList.toggle('active');
});

linkDos.addEventListener('click', () => {
    acordeon2.classList.toggle('active');
    arrowDos.classList.toggle('active');
});

// Eventos para abrir y cerrar los links del header en mobile
hamburguer.addEventListener('click', () => {
    modal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Eventos para abrir y cerrar los links del header en mobile
linkModalUno.addEventListener('click', () => {
    acordeonModalUno.classList.toggle('active');
    arrowModalUno.classList.toggle('active');
});

linkModalDos.addEventListener('click', () => {
    acordeonModalDos.classList.toggle('active');
    arrowModalDos.classList.toggle('active');
});