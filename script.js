
// let cart = [];
// let cartCount = 0;

// function addToCart(productName, price) {
//     cart.push({ productName, price });
//     cartCount++;
//     updateCartCount();
//     showPopup(productName);
// }

// function updateCartCount() {
//     document.getElementById('cart-count').textContent = cartCount;
// }

// function showPopup(productName) {
//     const popup = document.getElementById('popup');
//     const message = `Added ${productName} to cart`;
//     document.getElementById('popup-message').textContent = message;
//     popup.classList.add('popup-show');

//     setTimeout(() => {
//         popup.classList.remove('popup-show');
//     }, 2000);
// }

// function checkoutCart() {
//     if (cart.length === 0) {
//         alert("Your cart is empty.");
//         return;
//     }

//     // Create order summary
//     let orderDetails = "Order Summary:\n";
//     cart.forEach((item, index) => {
//         orderDetails += `${index + 1}. ${item.name} - $${item.price}\n`;
//     });

//     // WhatsApp URL with encoded message
//     const phoneNumber = "1234567890"; // Replace with your WhatsApp number
//     const encodedMessage = encodeURIComponent(orderDetails);
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//     // Redirect to WhatsApp with order details
//     window.location.href = whatsappUrl;

//     // Clear cart after checkout
//     cart = [];
//     updateCartCount();
// }

// // Toggle mobile menu
// function toggleMenu() {
//     const mobileMenu = document.getElementById('mobileMenu');
//     if (mobileMenu.style.display === 'block') {
//         mobileMenu.style.display = 'none';
//     } else {
//         mobileMenu.style.display = 'block';
//     }
// }

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = cart.length;

function addToCart(productName, price) {
    cart.push({ productName, price });
    cartCount++;
    updateCartCount();
    showPopup(productName);

    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cartCount;
}

function showPopup(productName) {
    const popup = document.getElementById('popup');
    const message = `Added ${productName} to cart`;
    document.getElementById('popup-message').textContent = message;
    popup.classList.add('popup-show');

    setTimeout(() => {
        popup.classList.remove('popup-show');
    }, 2000);
}

function checkoutCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    // Create order summary
    let orderDetails = "Order Summary:\n";
    cart.forEach((item, index) => {
        orderDetails += `${index + 1}. ${item.productName} - $${item.price}\n`;
    });

    // WhatsApp URL with encoded message
    const phoneNumber = "1234567890"; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp with order details
    window.location.href = whatsappUrl;

    // Clear cart after checkout
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart)); // Clear the cart in localStorage
    updateCartCount();
}

// Load the cart and display the order summary on cart.html page
function displayOrderSummary() {
    const orderSummaryElement = document.getElementById('order-summary');
    if (!orderSummaryElement) return; // Exit if on a page without the summary section

    let summaryHTML = '<ul>';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        summaryHTML += `<li>${index + 1}. ${item.productName} - $${item.price}</li>`;
        totalPrice += item.price;
    });

    summaryHTML += `<li><strong>Total: $${totalPrice}</strong></li>`;
    summaryHTML += '</ul>';
    orderSummaryElement.innerHTML = summaryHTML;
}

// Initialize cart count on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    displayOrderSummary(); // Show order summary if on the cart page
});
