// This is the checkout module for the checkout page.

export default class CheckoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = getPrice();
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }
  init() {
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
  }
}

const subTotal = getPrice();
document.getElementById("itemSubtotalValue").innerHTML = subTotal;

const tax = calculateTax();
document.querySelector("#taxValue").innerHTML = tax;

const shippingEstimate = calculateShipping();
document.querySelector("#shippingEstimateValue").textContent = shippingEstimate;

const orderTotal = calculateOrderTotal(subTotal, tax, shippingEstimate);
document.querySelector("#orderTotalValue").textContent = orderTotal;

function getPrice() {
  let priceToDisplay = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const obj = JSON.parse(value);
    let listPrice = parseFloat(obj.ListPrice);
    let quantity = parseInt(obj.qty);

    priceToDisplay = priceToDisplay + listPrice * quantity;
  }
  return CurrencyFormatted(priceToDisplay);
}

function CurrencyFormatted(amount) {
  var i = parseFloat(amount);
  if (isNaN(i)) {
    i = 0.0;
  }
  var minus = "";
  if (i < 0) {
    minus = "-";
  }
  i = Math.abs(i);
  i = parseInt((i + 0.005) * 100);
  i = i / 100;
  var s = new String(i);
  if (s.indexOf(".") < 0) {
    s += ".00";
  }
  if (s.indexOf(".") == s.length - 2) {
    s += "0";
  }
  s = minus + s;
  return s;
}

function calculateTax() {
  return CurrencyFormatted(subTotal * 0.06);
}

function getQtyItens() {
  let qty = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const obj = JSON.parse(value);
    let quantity = parseInt(obj.qty);
    qty += quantity;
  }

  return qty;
}

function calculateShipping() {
  let shippingValue = 0;

  for(let i = 0; i < getQtyItens(); i++) {
    if (i === 0) {
      shippingValue += 10;
    } else {
      shippingValue += 2;
    }
  }

  return shippingValue;
}

function calculateOrderTotal(subtotal, tax, shippingEstimate) {
  return CurrencyFormatted((parseFloat(subtotal) + parseFloat(tax) + parseInt(shippingEstimate)));
}