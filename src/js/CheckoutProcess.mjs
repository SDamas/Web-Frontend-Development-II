// This is the checkout module for the checkout page.
import { getCartItems, alertMessage, removeAllAlerts } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";

const externalServices = new ExternalServices();


// takes the items currently stored in the cart (localstorage) and returns them in a simplified form.
const cartItems = getCartItems();

export function packageItems(items) {
  // convert the list of products from localStorage to the simpler form required for the checkout process.
  let simplifiedcartItemsInfo = items.map((item) => {
    return {id: item.Id, name: item.Name, price: item.FinalPrice, quantity: item.qty}
  });

  return simplifiedcartItemsInfo;
}

export default class CheckoutProcess {
  constructor(outputSelector) {
    this.outputSelector = outputSelector;
    this.list = packageItems(cartItems);
    this.itemTotal = getPrice();
    this.shipping = 0;
    this.tax = 0.06;
    this.orderTotal = 0;
  }
  init() {
    this.calculateItemSummary();
  }
  calculateItemSummary() {
    // calculate and display the total amount of the items in the cart, and the number of items.
    this.calculateOrdertotal();
    document.querySelector(`${this.outputSelector} #itemSubtotal`).innerHTML += `(${this.list.length})`;
  }
  calculateOrdertotal() {
    // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
    
    // Calculate shipping
    let quantity = 0;
    for (const item of this.list) {
      quantity += parseInt(item.quantity);
    }
    if(quantity === 0) this.shipping = 0;
    else if (quantity === 1) this.shipping = 10;
    else this.shipping = (quantity - 1)*2 + 10;

    // Calculate tax
    this.tax = (parseFloat(this.itemTotal) + this.shipping) * 0.06;

    // Calculate order total;
    this.orderTotal = parseFloat(this.itemTotal) + this.shipping + this.tax;

    // display the totals.
    this.displayOrderTotals();
  }
  displayOrderTotals() {
    document.querySelector(`${this.outputSelector} #itemSubtotalValue`).textContent = '$'+this.itemTotal;
    document.querySelector(`${this.outputSelector} #shippingEstimateValue`).textContent = '$'+CurrencyFormatted(this.shipping);
    document.querySelector(`${this.outputSelector} #taxValue`).textContent = '$'+CurrencyFormatted(this.tax);
    document.querySelector(`${this.outputSelector} #orderTotalValue`).textContent = '$'+CurrencyFormatted(this.orderTotal);
  }
  async checkout() {
    // Build the order json object from the calculated fields, the items in the cart, and the information entered into the form
    // Takes the form element
    const form = document.forms["checkout-form"];
    // Convert to json
    const orderJSON = formDataToJSON(form);

    // Add order summary to json
    orderJSON.items = this.list;
    orderJSON.orderTotal = this.orderTotal;
    orderJSON.shipping = this.shipping;
    orderJSON.tax = this.tax.toString()
    orderJSON.orderDate = new Date().toISOString();

    try {
      const response = await externalServices.checkout(orderJSON);
      console.log(response);
      //clear out our cart contents in localStorage.
      localStorage.clear();
      location.assign("/checkout/success.html");
    } catch (err) {
      // get rid of any preexisting alerts.
      removeAllAlerts();
      for (let message in err.message) {
        alertMessage(err.message[message]);
      }
      console.log(err);
    }
  }
}

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

function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}