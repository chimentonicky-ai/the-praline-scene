// Main navigation and general functionality

document.addEventListener('DOMContentLoaded', () => {
  initializeCart();
  setupNavigation();
});

function setupNavigation() {
  // Add scroll effect to navbar
  const header = document.querySelector('header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
      // Scrolling up
      header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

function initializeCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartCount(cartItems.length);
}

function updateCartCount(count) {
  const cartIcon = document.querySelector('.cart-count');
  if (cartIcon) {
    cartIcon.textContent = count;
  }
}

function addToCart(productId, productName, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItem = {
    id: productId,
    name: productName,
    price: price,
    timestamp: new Date().getTime()
  };
  
  cart.push(cartItem);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount(cart.length);
  
  // Show confirmation
  showNotification(`${productName} added to cart!`);
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background-color: #c9944a;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    animation: slideIn 0.3s ease-in-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Smooth scroll to sections
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
