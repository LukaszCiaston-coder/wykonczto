function toggleNavbar() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const toggleSpans = navbarToggle.querySelectorAll('span');

    navbarToggle.addEventListener('click', function() {
        navbarToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        toggleSpans[0].classList.toggle('hidden');
    });
}

function handleResize() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (window.innerWidth < 768) {
        navbarToggle.style.display = 'block';
        mobileMenu.classList.remove('active');
    } else {
        navbarToggle.style.display = 'none';
        mobileMenu.classList.remove('active');
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);
window.addEventListener('DOMContentLoaded', toggleNavbar);
