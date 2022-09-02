let main_menu = document.querySelector('#toggleMenu');
main_menu.addEventListener('click', hideMenu);

function hideMenu() {
    if (window.innerWidth < 426) {
        let menu = document.querySelector('#menu');
        menu.classList.toggle('menu__container--hide');
        main_menu.classList.toggle('toggle__menu--hide');
        main_menu.querySelector('i:nth-child(1)').classList.toggle('toggle__icon--hide')
        main_menu.querySelector('i:nth-child(2)').classList.toggle('toggle__icon--hide')
    }
}

function scrollToTop() {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
}