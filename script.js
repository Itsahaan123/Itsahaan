
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
    const phoneNumber = "9145524298"; // Replace with your WhatsApp number
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

// Toggle mobile menu
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}

// Adding function for slideshow images

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show slides function
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    
    // If the index exceeds the number of slides, reset to the first slide
    if (n >= slides.length) {
        slideIndex = 0;
    }

    // If the index is less than 0, set it to the last slide
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex].style.display = "block";
}

// Auto-slide every 20 seconds
setInterval(function() {
    plusSlides(1);
}, 20000); // 20 seconds
