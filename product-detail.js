// Product detail page functionality
let currentProduct = {
    name: 'Classic Brownie',
    price: 200,
    description: 'Our Classic Brownie is everything you’ve ever dreamed of in a chocolate treat – rich, fudgy, and baked to perfection. Each bite is dense with deep cocoa flavor, slightly crisp on the edges yet wonderfully gooey in the center. It’s the kind of brownie that feels like a hug for your taste buds, perfect with a cup of coffee or a scoop of ice cream.',
    images: [
        'images/classic-brownie1.jpg',
        'images/classic-brownie2.jpeg',
        'images/classic-brownie3.jpg',
        'images/classic-brownie4.jpg'
    ]
};

// Product database for different products
const products = {
    'classic-brownie': {
        name: 'Classic Brownie',
        price: 200,
        description: 'Our Classic Brownie is everything you have ever dreamed of in a chocolate treat – rich, fudgy, and baked to perfection. Each bite is dense with deep cocoa flavor, slightly crisp on the edges yet wonderfully gooey in the center. It’s the kind of brownie that feels like a hug for your taste buds, perfect with a cup of coffee or a scoop of ice cream.',
        images: [
            'images/classic-brownie1.jpg',
            'images/classic-brownie2.jpeg',
            'images/classic-brownie3.jpg',
            'images/classic-brownie4.jpg'
        ]
    },
    'white-chocolate-brownie': {
        name: 'White chocolate brownie',
        price: 200,
        description: 'Sweet and dreamy, our White Chocolate Brownie is a delightful twist on the classic. It’s packed with creamy white chocolate chunks that melt into the rich batter, creating pockets of silky sweetness in every bite. Light in color but bold in flavor, this brownie is perfect for those who love a softer, more buttery chocolate experience',
        images: [
            'images/white-chocolate-brownie1.webp',
            'images/white-chocolate-brownie2.jpg',
            'images/white-chocolate-brownie3.jpg',
            'images/white-chocolate-brownie4.jpg'
        ]
    },
    'red-velvet-brownie': {
        name: 'Red Velvet brownie',
        price: 230,
        description: 'A perfect fusion of two beloved desserts, our Red Velvet Brownie offers the velvety smoothness of red velvet cake with the dense, fudgy bite of a brownie. The vibrant red color is as eye-catching as the taste is unforgettable, with subtle cocoa notes and a tender crumb that melts in your mouth.',
        images: [
            'images/Red-Velvet-Brownie1.jpg',
            'images/Red-Velvet-Brownie2.webp',
            'images/Red-Velvet-Brownie3.jpg',
            'images/Red-Velvet-Brownie4.jpg'
        ]
    },
    'brookie': {
        name: 'Brookie',
        price: 180,
        description: 'When a chewy cookie meets a decadent brownie, magic happens – and we call it the Brookie. With a soft, chocolatey brownie base and a golden, buttery cookie layer on top, it’s the best of both worlds in one bite. This treat is ideal for indecisive dessert lovers who simply can’t choose between the two.',
        images: [
            'images/brookie1.webp',
            'images/brookie2.jpg',
            'images/brookie3.jpg',
            'images/brookie4.jpg'
        ]
    },
    'snicker-brownie': {
        name: 'Snicker brownie',
        price: 250,
        description: 'We’ve taken our rich, fudgy brownie base and loaded it with layers of gooey caramel, crunchy peanuts, and luscious chocolate, just like your favorite candy bar. Our Snickers Brownie is indulgent, nutty, and guaranteed to satisfy even the fiercest sweet tooth cravings.',
        images: [
            'images/snicker-brownie1.jpg',
            'images/snicker-brownie2.webp',
            'images/snicker-brownie3.jpg',
            'images/snicker-brownie4.webp'
        ]
    },


    'chocolate-chip-cookie': {
        name: 'Classic Chocolate Chip Cookie',
        price: 100,
        description: 'Golden on the outside, irresistibly soft and chewy on the inside, our Classic Chocolate Chip Cookie is the ultimate comfort snack. Packed with generous chunks of rich chocolate, every bite is a nostalgic reminder of home-baked goodness.',
        images: [
            'images/chocolate-chip-cookie1.jpeg',
            'images/chocolate-chip-cookie2.jpg',
            'images/chocolate-chip-cookie3.jpg',
            'images/chocolate-chip-cookie4.jpg'
        ]
    },
    'rainbow-cookies': {
        name: 'Rainbow Cookie',
        price: 110,
        description: 'Our Rainbow Cookie is a burst of joy in every bite! Soft, buttery cookie dough is loaded with colorful cereal pebbles, creating a fun and crunchy texture that makes it perfect for kids – and kids at heart.',
        images: [
            'images/raindow-cookies1.jpg',
            'images/raindow-cookies2.webp',
            'images/raindow-cookies3.jpeg',
            'images/raindow-cookies4.jpeg'
        ]
    },
    'smore-cookie': {
        name: 'S’more Cookie',
        price: 150,
        description: 'Bring the campfire to your kitchen with our S’more Cookie! It’s packed with gooey marshmallow, chunks of milk chocolate, and buttery graham crumbs, all baked into a warm, chewy cookie. It’s like a camping trip in dessert form.',
        images: [
            'images/smore-cookie1.webp',
            'images/smore-cookie2.webp',
            'images/smore-cookie3.jpg',
            'images/smore-cookie4.jpg'
        ]
    },
    'cookie-monster-cookie': {
        name: 'Cookie Monster Cookie',
        price: 130,
        description: 'This bright blue cookie is stuffed to the brim with chunks of chocolate cookies and rich chocolate chips, making it a playful, over-the-top treat. Fun, bold, and absolutely delicious – Cookie Monster would definitely approve!',
        images: [
            'images/Cookie-Monster-Cookie1.webp',
            'images/Cookie-Monster-Cookie2.jpg',
            'images/Cookie-Monster-Cookie3.webp',
            'images/Cookie-Monster-Cookie4.webp'
        ]
    },
    'peanut-cookie': {
        name: 'Peanut Cookie',
        price: 130,
        description: 'Crunchy on the outside, soft on the inside, and loaded with roasted peanuts – our Peanut Cookie is a nut lover’s dream. The perfect balance of sweet and salty makes it impossible to stop at just one.',
        images: [
            'images/peanut-cookie1.jpg',
            'images/peanut-cookie2.jpg',
            'images/peanut-cookie3.jpg',
            'images/peanut-cookie4.jpg'
        ]
    },


    'chocolate-mousse': {
        name: 'Chocolate Mousse',
        price: 400,
        description: 'Our Chocolate Mousse is luxuriously rich yet light as air, with layers of deep cocoa flavor that melt on your tongue. It’s smooth, decadent, and perfect for a refined dessert experience.',
        images: [
            'images/chocolate-mousse1.webp',
            'images/chocolate-mousse2.jpg',
            'images/chocolate-mousse3.jpg',
            'images/chocolate-mousse4.jpg'
        ]
    },
    'jaggery-mousse': {
        name: 'Jaggery Mousse',
        price: 400,
        description: 'A creamy, earthy twist on the classic, our Jaggery Mousse is sweetened naturally with jaggery, giving it a warm, caramel-like flavor. It’s a delicious nod to traditional tastes wrapped in a modern dessert.',
        images: [
            'images/jaggary-mousse1.webp',
            'images/jaggary-mousse2.webp',
            'images/jaggary-mousse3.webp',
            'images/jaggary-mousse4.jpg'
        ]
    },
    'mango-mousse': {
        name: 'Mango Mousse',
        price: 450,
        description: 'Light, airy, and bursting with tropical freshness, our Mango Mousse is the taste of sunshine in a cup. It’s a fruity, refreshing treat perfect for warm days or when you need a little summer in your life.',
        images: [
            'images/Mango-Mousse1.jpg',
            'images/Mango-Mousse2.jpg',
            'images/Mango-Mousse3.jpg',
            'images/Mango-Mousse4.jpg'
        ]
    },
    'blueberry-mousse': {
        name: 'Blueberry Mousse',
        price: 450,
        description: 'Sweet and tangy blueberries are whipped into a velvety mousse that’s both refreshing and indulgent. The perfect mix of fruity brightness and creamy smoothness makes this a must-try.',
        images: [
            'images/blueberry-mousse1.webp',
            'images/blueberry-mousse2.jpg',
            'images/blueberry-mousse3.jpg',
            'images/blueberry-mousse4.jpg'
        ]
    },
    'oreo-mousse': {
        name: 'Oreo Mousse',
        price: 450,
        description: 'Cookies and cream lovers, rejoice! Our Oreo Mousse is layered with crunchy Oreo crumbs and soft, creamy mousse, creating a dessert that’s both nostalgic and indulgent.',
        images: [
            'images/Oreo-mousse1.jpg',
            'images/Oreo-mousse2.jpg',
            'images/Oreo-mousse3.jpg',
            'images/Oreo-mousse4.jpg'
        ]
    },



    'bento-cake': {
        name: 'Bento Cake',
        price: 1000,
        description: '(When placing an order, please mention your customization details.) Small but mighty in flavor, our Bento Cakes are perfect for personal celebrations or sweet gifting. Each one is beautifully decorated and fully customizable to suit your special moments.',
        images: [
            'images/bento-cake1.png',
            'images/bento-cake2.webp',
            'images/bento-cake3.webp',
            'images/bento-cake4.webp'
        ]
    },
    'fondant-cake': {
        name: 'Fondant Cake',
        price: 6000,
        description: '(When placing an order, please mention your customization details.) Our Fondant Cakes are smooth, elegant, and perfect for themed events. Whether you’re after a simple design or something elaborate, we can bring your cake vision to life.',
        images: [
            'images/fondent-cake1.jpg',
            'images/fondent-cake2.jpg',
            'images/fondent-cake3.png',
            'images/fondent-cake4.webp'
        ]
    },
    'decorated-cake': {
        name: 'Decorated Icing Cake',
        price: 4000,
        description: '(When placing an order, please mention your customization details.) Colorful, delicious, and full of personality, our Decorated Icing Cakes can be tailored to any celebration. Light, fluffy cake is covered in layers of creamy icing to match your style.',
        images: [
            'images/decorated-cake1.jpeg',
            'images/decorated-cake2.jpg',
            'images/decorated-cake3.jpg',
            'images/decorated-cake4.jpg'
        ]
    },
    '8x8-brownie-slab': {
        name: '8x8 Brownie Slab',
        price: 2500,
        description: '(When placing an order, please mention your customization details.) Perfect for sharing (or keeping to yourself), our 8x8 Brownie Slab is dense, rich, and ideal for parties, events, or as a decadent gift.',
        images: [
            'images/8x8-brownie-slab1.jpg',
            'images/8x8-brownie-slab2.webp',
            'images/8x8-brownie-slab3.webp',
            'images/8x8-brownie-slab4.jpg'
        ]
    },
    '8x6-brownie-slab': {
        name: '8x6 Brownie Slab',
        price: 1700,
        description: '(When placing an order, please mention your customization details.) A slightly smaller but equally indulgent version of our brownie slab – perfect for smaller gatherings or as a personal treat.',
        images: [
            'images/8x6-brownie-slab1.jpg',
            'images/8x6-brownie-slab2.webp',
            'images/8x6-brownie-slab3.webp',
            'images/8x6-brownie-slab4.jpg'
        ]
    },
};

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Get product from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product') || 'classic-fudge';

    if (products[productId]) {
        currentProduct = products[productId];
        updateProductDisplay();
    }

    updateCartCount();
});

function updateProductDisplay() {
    // Update product title
    document.getElementById('productTitle').textContent = currentProduct.name;
    document.getElementById('productBreadcrumb').textContent = currentProduct.name;

    // Update price
    document.getElementById('productPrice').textContent = currentProduct.price.toLocaleString('en-LK', {
        style: 'currency',
        currency: 'LKR'
    });


    // Update description
    document.getElementById('productDescription').textContent = currentProduct.description;

    // Update main image
    document.getElementById('mainImage').src = currentProduct.images[0];

    // Update thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        if (currentProduct.images[index]) {
            const img = thumb.querySelector('img');
            img.src = currentProduct.images[index].replace('w=600', 'w=150');
            thumb.onclick = () => changeMainImage(thumb, currentProduct.images[index]);
        }
    });
}

function changeMainImage(thumbnail, imageSrc) {
    // Update main image
    document.getElementById('mainImage').src = imageSrc;

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');

    // Add animation effect
    const mainImage = document.getElementById('mainImage');
    mainImage.style.opacity = '0.7';
    setTimeout(() => {
        mainImage.style.opacity = '1';
    }, 200);
}

function changeQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityInput.value);
    let newQuantity = currentQuantity + change;

    if (newQuantity >= 1 && newQuantity <= 10) {
        quantityInput.value = newQuantity;

        // Add visual feedback
        quantityInput.style.transform = 'scale(1.1)';
        setTimeout(() => {
            quantityInput.style.transform = 'scale(1)';
        }, 200);
    }
}

function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value);

    // Get existing cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if item already exists
    const existingItem = cart.find(item => item.name === currentProduct.name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            name: currentProduct.name,
            price: currentProduct.price,
            quantity: quantity,
            image: currentProduct.images[0]
        });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    // Visual feedback
    const addButton = document.querySelector('.add-to-cart-btn');
    const originalText = addButton.innerHTML;
    addButton.innerHTML = '<i class="fas fa-check"></i> Added!';
    addButton.style.background = 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)';

    setTimeout(() => {
        addButton.innerHTML = originalText;
        addButton.style.background = '';
    }, 800);

    // Animate cart icon
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 300);

    // Show notification
    showNotification(`${quantity} ${currentProduct.name}${quantity > 1 ? 's' : ''} added to cart!`, 'success');

    // Redirect to cart after short delay per requirement
    setTimeout(() => {
        window.location.href = 'cart.html';
    }, 900);
}

function buyNow() {
    addToCart();

    // Redirect to cart after a short delay
    setTimeout(() => {
        window.location.href = 'cart.html';
    }, 1000);
}

function viewProduct(productId) {
    window.location.href = `product-detail.html?product=${productId}`;
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
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

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    const colors = {
        success: '#4caf50',
        error: '#f44336',
        info: '#2196f3'
    };

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
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
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Image zoom functionality
document.addEventListener('DOMContentLoaded', () => {
    const mainImageContainer = document.querySelector('.main-image-container');
    const mainImage = document.getElementById('mainImage');

    mainImageContainer.addEventListener('mouseenter', () => {
        mainImage.style.transform = 'scale(1.1)';
    });

    mainImageContainer.addEventListener('mouseleave', () => {
        mainImage.style.transform = 'scale(1)';
    });
});