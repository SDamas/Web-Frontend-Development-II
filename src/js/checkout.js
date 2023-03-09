import { getCartItems } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";
import { packageItems } from "./CheckoutProcess.mjs";

// Get order summary field

// Initialize checkout process
const checkout = new CheckoutProcess("#order-summary");
checkout.init();

const button = document.querySelector("#submit-btn");
button.addEventListener("click", function (e) {
  e.preventDefault();
  checkout.checkout();
});
