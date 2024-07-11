document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle pour mobile
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
        this.classList.toggle('rotate');
    });

    // Gestion des cookies
    document.getElementById('accept-cookies').addEventListener('click', function() {
        document.getElementById('cookie-banner').style.display = 'none';
        document.cookie = "cookiesAccepted=true; max-age=" + (60*60*24*365) + "; path=/";
    });

    if (document.cookie.indexOf('cookiesAccepted=true') === -1) {
        document.getElementById('cookie-banner').style.display = 'block';
    } else {
        document.getElementById('cookie-banner').style.display = 'none';
    }
