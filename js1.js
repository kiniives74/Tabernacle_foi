const burgerMenubutton = document.querySelector('.burger-menu-button');
const burgerMenuicon = document.querySelector('.fa-solid.fa-list');
const burger = document.querySelector('.burger-menu');
const burgerLinks = document.querySelectorAll('.burger-menu a');

// Ouvrir / fermer le menu avec l'icône
burgerMenubutton.onclick = function () {

    burger.classList.toggle('open');

    const isopen = burger.classList.contains('open');

    burgerMenuicon.className = isopen
        ? 'fa-solid fa-x'
        : 'fa-solid fa-list';
};

// Fermer le menu quand on clique sur un lien
burgerLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('open');
        burgerMenuicon.className = 'fa-solid fa-list';
    });
});
