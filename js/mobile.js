function toggleNavbar() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const toggleSpans = navbarToggle.querySelectorAll('span');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

    navbarToggle.addEventListener('click', function() {
        navbarToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        toggleSpans[0].classList.toggle('hidden');
    });

    // Dodaj event listener do każdego linku w mobilnym menu
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            toggleSpans[0].classList.remove('hidden');
        });
    });
}

function handleResize() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (window.innerWidth < 768) {
        navbarToggle.style.display = 'block'; // Pokaż hamburger
        mobileMenu.classList.remove('active');
    } else {
        navbarToggle.style.display = 'none'; // Ukryj hamburger w wersji desktopowej
        mobileMenu.classList.remove('active');
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', () => {
    handleResize();
    toggleNavbar();
});

