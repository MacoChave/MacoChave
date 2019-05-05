let main_menu = document.querySelector('.main-menu-button');
main_menu.addEventListener('click', () => {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('hide-menu');
});