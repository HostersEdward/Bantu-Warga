const menu = document.querySelector('.burger');
if (menu) {
    const menuBody = document.querySelector('.header__menu');
    menu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}