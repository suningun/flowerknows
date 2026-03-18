// ====== Render Products ======
let products = [
    { id: 1, img: "/src/products/1.webp", name: "Laptop", price: 1200, stock: 10, category: ["Best Sellers","Lip"] },
    { id: 2, img: "/src/products/2.webp", name: "T-Shirt", price: 20, stock: 50, category: "Clothing" },
    { id: 3, img: "/src/products/3.webp", name: "Headphones", price: 80, stock: 25, category: "Electronics" }
];

let container = document.getElementById("product-list");

products.forEach(product => {
    let category = Array.isArray(product.category) ? product.category.join(", ") : product.category;

    let card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <p class="stock">Stock: ${product.stock}</p>
        <span class="category">${category}</span>
    `;
    container.appendChild(card);
});

