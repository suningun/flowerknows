// ====== Render Products ======
let products = [
    { id: 1, img: "/src/products/ID1.webp", name: "Swan Ballet Six-Colour Makeup Palette", price: 35, category: "Face"},
    { id: 2, img: "/src/products/ID2.webp", name: "Swan Ballet Embossed Blush", price: 26, category: "Face" },
    { id: 3, img: "/src/products/ID3.webp", name: "Butterfly Cloud Collar Rouge Box Highlighting & Blush Duo Powder", price: 18.20, category: "Eyes"},
    { id: 4, img: "/src/products/ID4.webp", name: "Strawberry Cupid All Day Glow Liquid Blush", price: 22, category: "Face" },
    { id: 5, img: "/src/products/ID5.webp", name: "Butterfly Cloud Collar Embossed Six-Colour Makeup Palette", price: 31.50, category: "Face" },
    { id: 6, img: "/src/products/ID6.webp", name: "Strawberry Cupid Pressed Powder", price: 35, category: "Face" },
    { id: 7, img: "/src/products/ID7.webp", name: "Little Angel Dewy Hydrating Primer", price: 35, category: "Face" },
    { id: 8, img: "/src/products/ID8.webp", name: "Shell's Jewel 6-Colour Makeup Palette", price: 35, category: "Face" },
    
    { id: 9, img: "/src/products/ID9.webp", name: "Butterfly Cloud Collar Liquid Eyeliner", price: 15, category: "Eyes" },
    { id: 10, img: "/src/products/ID10.webp", name: "Violet Strawberry Rococo Eyeshadow Palette", price: 31.50, category: "Eyes" },
    { id: 11, img: "/src/products/ID11.webp", name: "Bunny Garden Gel Eyeliner", price: 15, category: "Eyes" },
    { id: 12, img: "/src/products/ID12.webp", name: "The Sweetie Bear Dual-Ended Brow Gel & Pencil", price: 15, category: "Eyes" },
    { id: 13, img: "/src/products/ID13.webp", name: "Little Angel 9-Colour Eyeshadow Palette", price: 45, category: "Eyes" },
    { id: 14, img: "/src/products/ID14.webp", name: "Midsummer Fairytales Eyebrow Palette", price: 16, category: "Eyes" },
    
    { id: 15, img: "/src/products/ID15.webp", name: "Bunny Garden Lip Balm", price: 15, category: "Lips" },
    { id: 16, img: "/src/products/ID16.webp", name: "Butterfly Cloud Collar Glossy Lipstick", price: 20, category: "Lips" },
    { id: 17, img: "/src/products/ID17.webp", name: "The Sweetie Bear Coating Lip Jelly", price: 20, category: "Lips" },
    { id: 18, img: "/src/products/ID18.webp", name: "Swan Ballet Shine Lipstick", price: 14, category: "Lips" },
    { id: 19, img: "/src/products/ID19.webp", name: "Shell's Jewel Nourishing Lip Glaze", price: 14, category: "Lips" },
    { id: 20, img: "/src/products/ID20.webp", name: "Little Angel Matte Lipstick", price: 20, category: "Lips" },
    { id: 21, img: "/src/products/ID21.webp", name: "Strawberry Cupid Cake Lip Cream", price: 20, category: "Lips" },
    { id: 22, img: "/src/products/ID22.webp", name: "Strawberry Rococo Cloud Lip Cream", price: 16, category: "Lips" },
    
    { id: 23, img: "/src/products/ID23.webp", name: "Strawberry Rococo Hand Mirror", price: 25, category: "Accessories & Applicators" },
    { id: 24, img: "/src/products/ID24.webp", name: "Midsummer Fairytales Hand Mirror", price: 25, category: "Accessories & Applicators" },
    { id: 25, img: "/src/products/ID25.webp", name: "Butterfly Cloud Collar Hand Mirror", price: 25, category: "Accessories & Applicators" },
    { id: 26, img: "/src/products/ID26.webp", name: "Bunny Garden Hand Mirror", price: 25, category: "Accessories & Applicators" },
    { id: 27, img: "/src/products/ID27.webp", name: "The Sweetie Bear Hand Mirror", price: 25, category: "Accessories & Applicators" },
    { id: 28, img: "/src/products/ID28.webp", name: "Strawberry Cupid Hand Mirror", price: 25, category: "Accessories & Applicators" },
    { id: 29, img: "/src/products/ID29.webp", name: "Strawberry Cupid Scented Hand Cream", price: 15, category: "Accessories & Applicators" },
    { id: 30, img: "/src/products/ID30.webp", name: "Bunny Garden Hair Clip", price: 8, category: "Accessories & Applicators" },
    { id: 31, img: "/src/products/ID31.webp", name: "Bunny Garden Angled Blush Brush", price: 15, category: "Accessories & Applicators" },
    { id: 32, img: "/src/products/ID32.webp", name: "Flower Knows Chocolate Leather Tote Bag", price: 45, category: "Accessories & Applicators" },
    { id: 33, img: "/src/products/ID33.webp", name: "Blush Brush (Random)", price: 15, category: "Accessories & Applicators" },
    { id: 34, img: "/src/products/ID34.webp", name: "Shell's Jewel Hand Mirror", price: 25, category: "Accessories & Applicators" },
];



const categoryMap = {
    'cat-all': 'All',
    'cat-face': 'Face',
    'cat-eyes': 'Eyes',
    'cat-lips': 'Lips',
    'cat-accessories': 'Accessories & Applicators'
};
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-bar button');
    const container = document.getElementById('product-list');
    const categoryTitle = document.getElementById('category-title');

    function renderProducts(filteredProducts, categoryName) {
        categoryTitle.textContent = categoryName;
        container.innerHTML = '';

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card'); // Updated Name

            card.innerHTML = `
                <div class="image-box"> 
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <h3 class="product-title underline">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="btn btn-primary" data-id="${product.id}">Add to Cart</button>
            `;

            container.appendChild(card);
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {

            // Remove 'active' from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get category name
            const selectedCategory = categoryMap[button.id];

            // Filter products
            const filteredProducts = selectedCategory === 'All'
                ? products
                : products.filter(p => p.category === selectedCategory);

            renderProducts(filteredProducts, selectedCategory);
        });
    });

    // Initial load: show all products
    renderProducts(products, 'All');
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

        // Save current section
        localStorage.setItem('currentSection', targetId);

        // Show the section
        showSection(targetId);

        // Update URL hash without scrolling again
        history.replaceState(null, null, `#${targetId}`);
    });
});

// Show last saved section on refresh
window.addEventListener('DOMContentLoaded', () => {
    const savedSection = localStorage.getItem('currentSection') || 'home';
    showSection(savedSection);

    // Update hash on page load
    history.replaceState(null, null, `#${savedSection}`);
});


document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slideshow");

    function showSlide(n) {
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;

        slides.forEach(slide => {
            slide.style.display = "none";
        });

        slides[slideIndex].style.display = "block";
    }

    window.plusDivs = function(n) {
        slideIndex += n;
        showSlide(slideIndex);
    };

    showSlide(slideIndex);

    setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 5000);
});

// About Us
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

