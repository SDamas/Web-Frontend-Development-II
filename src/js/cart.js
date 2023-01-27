import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  // const cartItems = [getLocalStorage("so-cart")];
  let productIds = ["989CG", "985PR", "880RR", "344YJ"];
  let cartItems = [];

  for (let i = 0; i < productIds.length; i++) {
    if (getLocalStorage(productIds[i]) != null){
      cartItems = [... cartItems, getLocalStorage(productIds[i])];
    }
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
