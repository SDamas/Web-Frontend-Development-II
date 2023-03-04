// This is the checkout module for the checkout page.
import {getPrice} from "./cart.js";

export default class CheckoutProcess {
  constructor(key, outputSelector) {
    console.log(">> entrei no constru " )
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    console.log(">> getPrice(); ", getPrice())
    this.itemTotal = getPrice();
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }
  init() {
    console.log(">> iniciei " )
    this.list = getLocalStorage(this.key);
    this.calculateItemSummary();
  }
  calculateItemSummary() {
    // calculate and display the total amount of the items in the cart, and the number of items.
    
  }
  calculateOrdertotal() {
    // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
    
    // display the totals.
    this.displayOrderTotals();
  }
  displayOrderTotals() {
    // once the totals are all calculated display them in the order summary page
    console.log(">> getPrice(); ", getPrice())
    document.getElementById("itemSubtotalValue").innerHTML = getPrice();
  }
  
}