const hamburger = document.querySelector('.hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('toggle');
    mobileNav.classList.toggle('show');
    mobileNav.classList.toggle('hide');
})