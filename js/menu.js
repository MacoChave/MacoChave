let main_menu = document.querySelector('#toggleMenu');
main_menu.addEventListener('click', hideMenu);

function hideMenu() {
    if (window.innerWidth < 426) {
        let menu = document.querySelector('#menu');
        menu.classList.toggle('menu-container--hide');
        main_menu.classList.toggle('toggle-menu--hide');
    }
}