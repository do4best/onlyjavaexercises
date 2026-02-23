class ShoppingCart {
  constructor() {
    this.items = [];
  }

  additems(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  displayItems() {
    return this.items.map(item => `${item.name}: $${item.price}`);
  }
}

const shopingCartModule = new ShoppingCart();
shopingCartModule.additems({ name: "LapTop", price: 999.99 });
shopingCartModule.additems({ name: "SmartPhone", price: 9989 });
console.log("Items:");
console.log(shopingCartModule.displayItems());
console.log("Total: $" + shopingCartModule.getTotal());