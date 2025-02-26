// This is the boilerplate code given for you
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Function to render product list
function renderProducts() {
  productList.innerHTML = "";
  products.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Function to get cart from sessionStorage
function getCart() {
  return JSON.parse(sessionStorage.getItem("cart")) || [];
}

// Function to save cart to sessionStorage
function saveCart(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Function to render cart
function renderCart() {
  cartList.innerHTML = "";
  const cart = getCart();
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Function to add product to cart
function addToCart(productId) {
  const cart = getCart();
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    saveCart(cart);
    renderCart();
  }
}

// Function to clear cart
function clearCart() {
  sessionStorage.removeItem("cart");
  renderCart();
}

// Event listener for clearing cart
clearCartBtn.addEventListener("click", clearCart);

// Initialize the page
renderProducts();
renderCart();
