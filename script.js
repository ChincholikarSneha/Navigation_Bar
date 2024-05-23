document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.style.backgroundColor = '#001f3f';
        } else {
            navbar.style.backgroundColor = '##4CAF50';
        }
    });
});
