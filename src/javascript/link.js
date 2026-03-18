const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

function showSection(targetId) {
    sections.forEach(section => {
        if (section.id === targetId) {
            section.classList.remove('section-hidden'); // show section
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            section.classList.add('section-hidden'); // hide others
        }
    });
}

// Handle nav clicks
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // stop default jump
        const targetId = link.getAttribute('href').replace('#','');
        showSection(targetId);
    });
});

// Show last saved section on refresh
window.addEventListener('DOMContentLoaded', () => {
    const savedSection = localStorage.getItem('currentSection') || 'home';
    showSection(savedSection);
});