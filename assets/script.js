// Main Shopify theme JavaScript

document.addEventListener('DOMContentLoaded', function() {
  initializeCart();
  setupNavigation();
});

function initializeCart() {
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
    updateCartCount();
  }
}

function updateCartCount() {
  fetch('/cart.json')
    .then(response => response.json())
    .then(data => {
      const cartCount = document.querySelector('.cart-count');
      if (cartCount) {
        cartCount.textContent = data.item_count;
      }
    })
    .catch(error => console.error('Error fetching cart:', error));
}

function setupNavigation() {
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Update cart count when items are added
document.addEventListener('cart:added', function() {
  updateCartCount();
});
