const menuToggle = document.querySelector('#menu-toggle input');
const nav= document.querySelector('.navbar-humburger');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('hidden')
})

const btnPopUp = document.querySelectorAll('.btn-get');
const tampil = document.querySelector('.get-start');
const keluar = document.querySelector('.btn-close');

for (let i = 0; i < btnPopUp.length; i++) {
    btnPopUp[i].addEventListener('click', function (){
        tampil.classList.remove('hidden')
    });
};

keluar.addEventListener('click', function() {
    tampil.classList.add('hidden')
})