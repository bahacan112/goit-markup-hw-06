document.querySelector('.hamburger-menu').addEventListener('click', function () {
    var mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav.classList.contains('is-open')) {
        mobileNav.classList.remove('is-open');
    } else {
        mobileNav.classList.add('is-open');
    }
});
document.querySelector('#hamburger-button').addEventListener('click', function () {
    var mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav.classList.contains('is-open')) {
        mobileNav.classList.remove('is-open');
    } else {
        mobileNav.classList.add('is-open');
    }
});
