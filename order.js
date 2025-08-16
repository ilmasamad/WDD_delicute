// Order form functionality
document.addEventListener('DOMContentLoaded', () => {
    loadCartItems();
    setupFormHandlers();
});

function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItemsContainer = document.getElementById('orderItems');
    const orderTotalElement = document.getElementById('orderTotal');

    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p class="text-muted">No items in cart. <a href="products.html">Add some items</a> first!</p>';
        orderTotalElement.textContent = '0';
        return;
    }

    let total = 0;
    orderItemsContainer.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="order-item">
                <div>
                    <strong>${item.name}</strong>
                    <small class="text-muted d-block">Quantity: ${item.quantity}</small>
                </div>
                <div>LKR ${itemTotal.toFixed(0)}</div>
            </div>
        `;
    }).join('');

    total += 300; // Delivery fee in LKR
    orderTotalElement.textContent = `LKR ${total.toFixed(0)}`;
}



function setupFormHandlers() {
    const deliveryDateInput = document.getElementById('deliveryDate');

    // Set minimum date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    deliveryDateInput.min = tomorrow.toISOString().split('T')[0];
}

function getOrderData() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const formData = new FormData(document.getElementById('orderForm'));
    const customerData = Object.fromEntries(formData.entries());

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 300;

    const orderText = `
🧁 *delicute Order*

*Customer Information:*
Name: ${customerData.firstName} ${customerData.lastName}
Email: ${customerData.email}
Phone: ${customerData.phone}

*Delivery Address:*
${customerData.address}
${customerData.city}, ${customerData.zipCode}
Preferred Date: ${customerData.deliveryDate}
${customerData.deliveryNotes ? `Notes: ${customerData.deliveryNotes}` : ''}

*Order Items:*
${cart.map(item => `• ${item.name} x${item.quantity} - LKR ${(item.price * item.quantity).toFixed(0)}`).join('\n')}

*Order Total: LKR ${total.toFixed(0)}*
(Includes LKR 300 delivery fee)


Please confirm this order and let us know the estimated preparation time. Thank you! 🍰
    `.trim();

    return orderText;
}

function sendToWhatsApp() {
    if (!validateForm()) return;

    const orderText = getOrderData();
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappUrl, '_blank');
    showNotification('Opening WhatsApp...', 'success');
}

function sendToInstagram() {
    if (!validateForm()) return;

    const orderText = getOrderData();
    // Copy to clipboard for Instagram DM
    navigator.clipboard.writeText(orderText).then(() => {
        showNotification('Order details copied to clipboard! Now opening Instagram...', 'success');
        window.open('https://instagram.com/sweetdreamsbakery', '_blank');
    }).catch(() => {
        showNotification('Please copy the order details manually and send via Instagram DM', 'info');
        window.open('https://instagram.com/sweetdreamsbakery', '_blank');
    });
}

function sendToEmail() {
    if (!validateForm()) return;

    const orderText = getOrderData();
    const subject = 'Sweet Dreams Bakery Order Request';
    const emailUrl = `mailto:orders@sweetdreamsbakery.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(orderText)}`;
    window.location.href = emailUrl;
    showNotification('Opening email client...', 'success');
}

function validateForm() {
    const form = document.getElementById('orderForm');
    const requiredFields = form.querySelectorAll('[required]');

    for (let field of requiredFields) {
        if (!field.value.trim()) {
            showNotification(`Please fill in ${field.labels[0].textContent}`, 'error');
            field.focus();
            return false;
        }
    }

    // Validate delivery date
    const deliveryDate = document.getElementById('deliveryDate').value;
    const selectedDate = new Date(deliveryDate);
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);

    if (selectedDate < minDate) {
        showNotification('Please select a delivery date at least 1 day in advance', 'error');
        return false;
    }

    // Check if cart has items
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        showNotification('Please add items to your cart first!', 'error');
        return false;
    }

    return true;
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
        max-width: 350px;
        font-size: 14px;
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