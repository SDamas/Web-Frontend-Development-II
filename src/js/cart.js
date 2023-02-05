import { getLocalStorage, getProductsIds, getQtyItens } from "./utils.mjs";

export function renderCartContents() {
  // const cartItems = [getLocalStorage("so-cart")];
  let productIds = ["880RR", "985RF", "989CG", "985PR", "880RT", "344YJ"];

  let cartItems = [];

  for (let i = 0; i < productIds.length; i++) {
    if (getLocalStorage(productIds[i]) != null) {
      cartItems = [...cartItems, getLocalStorage(productIds[i])];
    }
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<div class="row">
  <li class="cart-card divider">
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
    <i class="fa fa-trash-o fa-1x" id="removeFromCart${item.Id}"" data-id="removeItem${item.Id}"></i>
  </li>
</div>`;

  return newItem;
}

function removeItem(item) {
  localStorage.removeItem(item);
}

function updateCart() {
  renderCartContents();
  displayPrice();
  document.getElementById("lblCartCount").innerHTML = getQtyItens();

  if (document.getElementById('removeFromCart880RR'))
  document.getElementById('removeFromCart880RR')
    .addEventListener('click', removeItem880RR.bind(this));

  if (document.getElementById('removeFromCart989CG'))
    document.getElementById('removeFromCart989CG')
      .addEventListener('click', removeItem989CG.bind(this));

  if (document.getElementById('removeFromCart985RF'))
    document.getElementById('removeFromCart985RF')
      .addEventListener('click', removeItem985RF.bind(this));

  if (document.getElementById('removeFromCart985PR'))
    document.getElementById('removeFromCart985PR')
      .addEventListener('click', removeItem985PR.bind(this));

  if (document.getElementById('removeFromCart880RT'))
    document.getElementById('removeFromCart880RT')
      .addEventListener('click', removeItem880RT.bind(this));

  if (document.getElementById('removeFromCart344YJ'))
    document.getElementById('removeFromCart344YJ')
      .addEventListener('click', removeItem344YJ.bind(this));
  }

function removeItem880RR() {
  removeItem('880RR');
  updateCart();
};

function removeItem989CG() {
  removeItem('989CG');
  updateCart();
};

function removeItem985RF() {
  removeItem('985RF');
  updateCart();
};

function removeItem985PR() {
  removeItem('985PR');
  updateCart();
};

function removeItem880RT() {
  removeItem('880RT');
  updateCart();
};

function removeItem344YJ() {
  removeItem('344YJ');
  updateCart();
};

function displayPrice() {
  let price = getPrice();
  if (price > 0) {
    document.getElementById("cart-footer").style.visibility = "visible";
    document.getElementById("cart-total-value").innerHTML = price;
  } else {
    document.getElementById("cart-footer").style.visibility = "hidden";
  }
}

function getPrice() {
  let priceToDisplay = 0;
  let productIds = getProductsIds();
  for (let i = 0; i < productIds.length; i++) {
    if (getLocalStorage(productIds[i]) != null) {
      const cartItem = getLocalStorage(productIds[i]);
      priceToDisplay += cartItem.ListPrice;
    }
  }
  return priceToDisplay;
}

updateCart();
