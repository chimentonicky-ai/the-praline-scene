// Shopping cart functionality

class ShoppingCart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
  }

  addItem(product) {
    this.items.push(product);
    this.save();
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.save();
  }

  clearCart() {
    this.items = [];
    this.save();
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getItemCount() {
    return this.items.length;
  }

  save() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }
}

// Initialize cart
const cart = new ShoppingCart();
