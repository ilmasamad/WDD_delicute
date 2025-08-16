// DOM Elements
const cartBtn = document.querySelector('.cart-btn');
const cartCount = document.querySelector('.cart-count');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const navLinks = document.querySelectorAll('.nav-link');
const userBtn = document.getElementById('userBtn');
const userDropdown = document.getElementById('userDropdown');

// Cart functionality
// Initialize cart count on page load
updateCartCount();

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        // Simple search implementation - highlight matching products
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(searchTerm)) {
                card.style.border = '3px solid #e91e63';
                card.style.boxShadow = '0 0 20px rgba(233, 30, 99, 0.5)';
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                card.style.border = 'none';
                card.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
            }
        });

        // Clear search after 3 seconds
        setTimeout(() => {
            productCards.forEach(card => {
                card.style.border = 'none';
                card.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
            });
        }, 3000);
    }
}

// Add to cart functionality
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Do not add to cart if this button is meant to view product details
        const onclickAttr = btn.getAttribute('onclick') || '';
        if (onclickAttr.includes('viewProductDetail')) {
            return;
        }

        const productName = btn.getAttribute('data-product');
        const productPrice = parseFloat(btn.getAttribute('data-price'));

        // Load cart fresh from localStorage each time
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add item to cart
        const existingItem = cart.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            const productCard = btn.closest('.product-card');
            const suggestedItem = btn.closest('.suggested-item');
            const imageSrc = (productCard && productCard.querySelector('img'))
                ? productCard.querySelector('img').src
                : (suggestedItem && suggestedItem.querySelector('img'))
                    ? suggestedItem.querySelector('img').src
                    : '';

            cart.push({
                name: productName,
                price: productPrice,
                quantity: 1,
                image: imageSrc
            });
        }

        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update cart count
        updateCartCount();

        // Visual feedback
        btn.textContent = 'Added!';
        btn.style.background = 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)';

        setTimeout(() => {
            btn.textContent = 'Add to Cart';
            btn.style.background = 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)';
        }, 1000);

        // Animate cart icon
        if (cartBtn) {
            cartBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartBtn.style.transform = 'scale(1)';
            }, 200);
        }

        // Show success message
        showNotification('Item added to cart!', 'success');
    });
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;

        if (totalItems > 0) {
            cartCount.style.display = 'flex';
        } else {
            cartCount.style.display = 'none';
        }
    }
}

// Smooth scrolling for navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // If it's a hash link (same page navigation)
        if (href.startsWith('#')) {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            const targetSection = document.querySelector(href);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Pagination dots functionality
const paginationDots = document.querySelectorAll('.pagination-dots');

paginationDots.forEach(dotsContainer => {
    const dots = dotsContainer.querySelectorAll('.dot');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all dots in this container
            dots.forEach(d => d.classList.remove('active'));
            // Add active class to clicked dot
            dot.classList.add('active');
        });
    });
});

// Shop buttons functionality
const shopBtns = document.querySelectorAll('.shop-btn, .category-shop-btn, .cta-btn');

shopBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Add visual feedback
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards for scroll animations
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe featured items
const featuredItems = document.querySelectorAll('.featured-item');
featuredItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    observer.observe(item);
});

// Observe review items
const reviewItems = document.querySelectorAll('.review-item');
reviewItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Add sparkle effect to buttons on hover
function createSparkles(e) {
    const button = e.target;
    const rect = button.getBoundingClientRect();

    for (let i = 0; i < 3; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.background = '#e91e63';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';

        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;

        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';

        document.body.appendChild(sparkle);

        // Animate sparkle
        sparkle.animate([
            { transform: 'scale(0) rotate(0deg)', opacity: 1 },
            { transform: 'scale(1) rotate(180deg)', opacity: 0.5 },
            { transform: 'scale(0) rotate(360deg)', opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
}

// Add sparkle effect to all buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', createSparkles);
    });
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#e91e63'};
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

// Initialize cart count display
updateCartCount();

// Function to view product details
function viewProductDetail(productId) {
    window.location.href = `product-detail.html?product=${productId}`;
}

function viewProduct(productId) {
    window.location.href = `product-detail.html?product=${productId}`;
}

