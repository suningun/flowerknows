// ====== Render Products ======
let products = [
    { id: 1, img: "/src/products/1.png", name: "Little Angel 9-Color Eyeshadow Palette", price: 45.00, stock: 10, category: ["Best Sellers", "Eyes"]},
    { id: 2, img: "/src/products/2.png", name: "Butterfly Cloud Collar Liquid Eyeliner", price: 15.00, stock: 50, category: "Eyes" },
    { id: 3, img: "/src/products/3.png", name: "Little Angel 9-Color Eyeshadow Palette", price: 45.00, stock: 10, category: ["Best Sellers", "Eyes"]},
    { id: 4, img: "/src/products/4.png", name: "Butterfly Cloud Collar Liquid Eyeliner", price: 15.00, stock: 50, category: "Eyes" },
];

let container = document.getElementById("product-list");

products.forEach(product => {
    let category = Array.isArray(product.category) 
        ? product.category.join(", ") 
        : product.category;

    // Check if product is a best seller
    let isBestSeller = Array.isArray(product.category) && product.category.includes("Best Sellers");

    let card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <div class="image-wrapper">
            ${isBestSeller ? '<span class="badge">Best Seller</span>' : ''}
            <img src="${product.img}" alt="${product.name}">
        </div>
        <h3>${product.name}</h3>
        <p class="price">$ ${product.price.toFixed(2)}</p>
        <button class="button" data-id="${product.id}">Add to Cart</button>
    `;

    container.appendChild(card);
});



//Handle LINKKKK

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
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#','');

        localStorage.setItem('currentSection', targetId);

        showSection(targetId);
    });
});

// Show last saved section on refresh
window.addEventListener('DOMContentLoaded', () => {
    const savedSection = localStorage.getItem('currentSection') || 'home';
    showSection(savedSection);
});


