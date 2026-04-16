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


const createHeader = () => {
    const header = document.getElementById('main-header');

    header.innerHTML = `
        <div class="nav-bar">
            <button class="hamburger">
                <i class="fas fa-bars"></i>
            </button>
            <div class="logo">
                <img src="/src/logo.avif" alt="FlowerKnows Logo">
            </div>

            <nav>
                <a href="/">home</a>
                <a href="about.html">about</a>
                <a href="categories.html">category</a>
                <a href="contact.html">contact</a>
            </nav>

            <div class="right-nav">
                <a><i class="fas fa-search"></i></a>
                <a><i class="fas fa-user"></i></a>
                <a><i class="fas fa-shopping-bag"></i></a>
            </div>
        </div>
    `;
};
createHeader();

const createFooter = () => {
    const footer = document.getElementById('main-footer');

    footer.innerHTML = `

        <ul class="footer-page">
            <li>
                <img src="/src/additional-images/live_your_fairytale.webp" alt="live with fary Tale">
            </li>
        </ul>

        <ul class="footer-top">
            <li class="footer-column">
                <h3>ABOUT FLOWER KNOWS</h3>
                <ul>
                    <li><a href="#">Loyalty Program</a></li>
                    <li><a href="#">Brand Story</a></li>
                    <li><a href="#">Affiliate Program</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Become a Retailer</a></li>
                </ul>
            </li>

            <li class="footer-column">
                <h3>CUSTOMER CARE</h3>
                <ul>
                    <li><a href="#">Shipping Policy</a></li>
                    <li><a href="#">Refund & Return Policy</a></li>
                    <li><a href="#">Promotion Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                </ul>
            </li>

            <li class="footer-column">
                <h3>CUSTOMER SERVICE</h3>
                <ul>
                    <li><a href="#">Student Discount</a></li>
                    <li><a href="#">Track Your Order</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Submit a Fake</a></li>
                </ul>
            </li>

            <li class="footer-column">
                <h3>FOLLOW US</h3>
                <ul class="social-icons">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-tiktok"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                </ul>
            </li>
        </ul>

        <ul class="footer-bottom">
            <li>
                <p>© 2026, Flower Knows . All rights reserved.</p>
            </li>
        </ul>


    `;
};
createFooter();



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
    const stars = '<i class="fas fa-star"></i>'.repeat(5);

    function renderProducts(filteredProducts, categoryName) {
        categoryTitle.textContent = categoryName;
        container.innerHTML = '';

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card'); // Updated Name

            card.innerHTML = `

                <div class="hover-effect">
                            <img src="${product.img}" alt="${product.name}">
                            <button class="btn btn-primary add-to-cart hover-button" data-id="${product.id}">
                                Add to Cart
                            </button>
                        </div>
                        <h3 class="product-title underline">${product.name}</h3>
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                        <p class="stars">${stars}</p>
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

// // About Us
// document.addEventListener('DOMContentLoaded', () => {
//     const observerOptions = {
//         threshold: 0.2
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('appear');
//             }
//         });
//     }, observerOptions);

//     const fadeElements = document.querySelectorAll('.fade-in');
//     fadeElements.forEach(el => observer.observe(el));
// });



const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", () => {
    function toggleAnswer(row) {
        const answerRow = row.nextElementSibling;
        const arrow = row.querySelector(".arrow");

        if (answerRow.style.display === "table-row") {
            answerRow.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
            // arrow.textContent = "▼";
        } else {
            answerRow.style.display = "table-row";
            arrow.style.transform = "rotate(180deg)";
            // arrow.textContent = "▲";
        }
    }

    // Optional: attach event listeners instead of inline onclick
    document.querySelectorAll(".question-row").forEach(row => {
        row.addEventListener("click", () => toggleAnswer(row));
    });
});
