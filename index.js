document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.animation', {
        strings: ['Noah Ripert 👋','Développeur 👋', 'Étudiant 👋'],
        typeSpeed: 75,
        backSpeed: 75,
        loop: true
    });

    document.addEventListener('mousemove', function(e) {
        var spotlight = document.querySelector('.spotlight');
        spotlight.style.left = e.pageX + 'px';
        spotlight.style.top = e.pageY + 'px';
    });
});
