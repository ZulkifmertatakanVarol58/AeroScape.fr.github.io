// Function to toggle the navigation menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
}

// Function to set the language of the page
function setLanguage(lang) {
    const frContent = {
        title: "Couverture AéroScape",
        description: "AeroScape, c'est comme une encyclopédie en ligne dédiée à tout ce qui concerne l'aéronautique, l'aérospatial et l'exploration spatiale. !🚀"
    };
    const enContent = {
        title: "AeroSpace Entrance",
        description: "AeroScape is like an online encyclopedia dedicated to everything related to aeronautics, aerospace and space exploration. ! 🚀"
    };
    
    const content = lang === 'fr' ? frContent : enContent;

    document.querySelector('.hero h1').innerText = content.title;
    const descriptionElement = document.querySelector('.hero p');
    descriptionElement.innerText = content.description;
    descriptionElement.style.color = 'white'; // Change color to white

    document.querySelectorAll('.language-switcher a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
}

// Event listeners for language switcher
document.getElementById('lang-fr').addEventListener('click', () => setLanguage('fr'));
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

// Initial load
setLanguage('fr');

// Function to handle the button click with animation and redirection
document.getElementById('cta-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Add the animation class for the door effect
    this.classList.add('door-animation');
    
    // After the animation ends, navigate to the new page
    setTimeout(() => {
        window.location.href = this.href;
    }, 1000); // Duration of the animation in milliseconds
});

function openDoor(event) {
    event.preventDefault();
    const button = event.currentTarget;

    button.style.pointerEvents = 'none';

    button.querySelector(':before').style.transform = 'translateX(0)';
    button.querySelector(':after').style.transform = 'translateX(0)';

    setTimeout(() => {
        window.location.href = 'http://www.yourwebsite.com';
    }, 500);
}
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === '=' || event.key === '-' || event.key === '0')) {
        event.preventDefault();
    }
});

document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('gesturestart', function(event) {
    event.preventDefault();
});

document.addEventListener('gesturechange', function(event) {
    event.preventDefault();
});

document.addEventListener('gestureend', function(event) {
    event.preventDefault();
});