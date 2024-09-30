// Dummy data for products
const products = [
    { id: 1, name: 'Product One', price: 29.99, image: 'assets/images/product1.jpg' },
    { id: 2, name: 'Product Two', price: 19.99, image: 'assets/images/product2.jpg' },
];

// Cart functionality
let cart = [];

// Add product to cart
document.getElementById("addToCartBtn").addEventListener("click", function() {
    const product = products[0];  // Add specific product by ID (this example uses product one)
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
    updateCartDisplay();
});

// Update cart display in cart.html
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cartItems");
    const cartTotalContainer = document.getElementById("cartTotal");

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
                <p>$${item.price}</p>
            </div>
        `;
    });

    cartTotalContainer.textContent = `$${total.toFixed(2)}`;
}

// Checkout functionality
document.getElementById("checkoutBtn").addEventListener("click", function() {
    alert("Proceeding to checkout!");
    cart = [];  // Clear cart
    updateCartDisplay();
});
