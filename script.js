function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger-menu');

    // Alterna a classe "open" para o hamburger e "show" para o menu
    menu.classList.toggle('show');
    hamburger.classList.toggle('open');
}
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para não ter valores negativos
});
