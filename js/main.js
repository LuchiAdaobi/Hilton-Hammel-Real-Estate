// HAMBURGER MENU
const closeBtn = document.getElementById('close-btn');
const openBtn = document.getElementById('open-btn');
const navBar = document.getElementById('navbar');

openBtn.addEventListener('click', () => {
    navBar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('active');
});


// POPUP MODAL

const popUp = document.getElementById('popup');
const closePopUp = document.getElementById('close-popup');

const openPopup = document.querySelectorAll('button');

document.querySelectorAll(".button").forEach(i => i.addEventListener(
    "click",
    e => {
        popUp.classList.add('show');
    }
));

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('show')
})

window.addEventListener('click', clickOutside);

function clickOutside(e) {
    if(e.target == popUp){
        popUp.classList.remove('show')
    }
    
}
