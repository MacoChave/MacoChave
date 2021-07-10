let main_menu = document.querySelector('#toggleMenu');
main_menu.addEventListener('click', () => {
    let menu = document.querySelector('#menu');
    menu.classList.toggle('hide-menu');
});