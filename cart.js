// Cart page functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const cartItemsContainer = document.getElementById('cartItems');
const emptyCartContainer = document.getElementById('emptyCart');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');
const checkoutBtn = document.getElementById('checkoutBtn');

// Initialize cart page
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
    updateCartSummary();
});

function displayCartItems() {
    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        document.querySelector('.cart-summary').style.display = 'none';
        emptyCartContainer.style.display = 'block';
        return;
    }

    cartItemsContainer.style.display = 'block';
    document.querySelector('.cart-summary').style.display = 'block';
    emptyCartContainer.style.display = 'none';

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-name="${item.name}">
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                 <h3>${item.name}</h3>
                <p class="item-price">LKR ${item.price.toFixed(2)}</p>
            </div>
            <div class="quantity-controls">
                <button class="qty-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeItem('${item.name}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function updateQuantity(itemName, change) {
    const item = cart.find(item => item.name === itemName);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeItem(itemName);
            return;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartSummary();
        updateCartCount();

        // Add visual feedback
        const cartItem = document.querySelector(`[data-name="${itemName}"]`);
        cartItem.style.transform = 'scale(1.02)';
        setTimeout(() => {
            cartItem.style.transform = 'scale(1)';
        }, 200);
    }
}

function removeItem(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartSummary();
    updateCartCount();

    showNotification('Item removed from cart', 'info');
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = cart.length > 0 ? 300.00 : 0;
    const total = subtotal + delivery;

    if (subtotalElement) subtotalElement.textContent = subtotal.toLocaleString('en-LK', {
        style: 'currency',
        currency: 'LKR'
    });
    if (totalElement) totalElement.textContent = total.toLocaleString('en-LK', {
        style: 'currency',
        currency: 'LKR'
    });
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;

        if (totalItems > 0) {
            cartCount.style.display = 'flex';
        } else {
            cartCount.style.display = 'none';
        }
    }
}

// Checkout functionality
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty!', 'info');
            return;
        }

        // Redirect to order page for checkout
        showNotification('Redirecting to order form...', 'info');
        setTimeout(() => {
            window.location.href = 'order.html';
        }, 1000);
    });
}

// Notification system (same as in script.js)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'info' ? '#2196f3' : '#e91e63'};
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}