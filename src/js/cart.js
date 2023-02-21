import { getLocalStorage, getProductsIds, getQtyItens, loadHeaderFooter  } from "./utils.mjs";

let qtyById = {}
let atStart = true;
const maxQtyItems = 6;

export function renderCartContents() {
  // const cartItems = [getLocalStorage("so-cart")];
  let productIds = ["880RR", "985RF", "989CG", "985PR", "880RT", "344YJ"];

  let cartItems = [];

  for (let i = 0; i < productIds.length; i++) {
    if (getLocalStorage(productIds[i]) != null) {
      cartItems = [...cartItems, getLocalStorage(productIds[i])];
    }
  }

  if(atStart) {
    atStart = false;
    crateQtyById(cartItems);
  }

  const cartItemsObj = {};
  for (let i = 0; i < cartItems.length; i++) {
    cartItemsObj[i] = { ["item"]: cartItems[i], ["qty"]: qtyById[i].qty };
  }

  let htmlItems = "";
  for (let i = 0; i < cartItems.length; i++) {
    htmlItems = [...htmlItems, cartItemTemplate(cartItemsObj[i])]
  }

  //const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  if(htmlItems)
    document.querySelector(".product-list").innerHTML = htmlItems?.join("");
  else
    document.querySelector(".product-list").innerHTML = "";
}

function crateQtyById(cartItems) {
  for (let i = 0; i < cartItems.length; i++) {
    qtyById[i] = { ["Id"]: cartItems[i].Id, ["qty"]: 1 };
  }
}

function cartItemTemplate(item) {
  const newItem = `<div class="row">
  <li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.item.Image}"
        alt="${item.item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: ${item.qty} <i class="fa fa-cart-plus fa-2x" id="addQty${item.item.Id}"" data-id="addQtyItem${item.item.Id}"></i></p>
    <p class="cart-card__price">$${item.item.FinalPrice}</p>
    <i class="fa fa-trash-o fa-1x" id="removeFromCart${item.item.Id}"" data-id="removeItem${item.item.Id}"></i>
  </li>
</div>`;

  return newItem;
}

function updateCart() {
  renderCartContents();
  displayPrice();
  // document.getElementById("lblCartCount").innerHTML = getQtyItens();
  addElements();
  removeElements();
}

function addElements() {
  if (document.getElementById('addQty880RR'))
  document.getElementById('addQty880RR')
    .addEventListener('click', addItem.bind(this, '880RR'));

  if (document.getElementById('addQty989CG'))
    document.getElementById('addQty989CG')
      .addEventListener('click', addItem.bind(this, '989CG'));

  if (document.getElementById('addQty985RF'))
    document.getElementById('addQty985RF')
      .addEventListener('click', addItem.bind(this, '985RF'));

  if (document.getElementById('addQty985PR'))
    document.getElementById('addQty985PR')
      .addEventListener('click', addItem.bind(this, '985PR'));

  if (document.getElementById('addQty880RT'))
    document.getElementById('addQty880RT')
      .addEventListener('click', addItem.bind(this, '880RT'));

  if (document.getElementById('addQty344YJ'))
    document.getElementById('addQty344YJ')
      .addEventListener('click', addItem.bind(this, '344YJ'));
};

function removeElements(idToBeRemoved) {
  if (document.getElementById('removeFromCart880RR'))
  document.getElementById('removeFromCart880RR')
    .addEventListener('click', removeItem.bind(this, '880RR'));

  if (document.getElementById("removeFromCart989CG"))
    document
      .getElementById("removeFromCart989CG")
      .addEventListener("click", removeItem.bind(this, "989CG"));

  if (document.getElementById("removeFromCart985RF"))
    document
      .getElementById("removeFromCart985RF")
      .addEventListener("click", removeItem.bind(this, "985RF"));

  if (document.getElementById("removeFromCart985PR"))
    document
      .getElementById("removeFromCart985PR")
      .addEventListener("click", removeItem.bind(this, "985PR"));

  if (document.getElementById("removeFromCart880RT"))
    document
      .getElementById("removeFromCart880RT")
      .addEventListener("click", removeItem.bind(this, "880RT"));

  if (document.getElementById('removeFromCart344YJ'))
    document.getElementById('removeFromCart344YJ')
      .addEventListener('click', removeItem.bind(this, '344YJ'));
};

function removeItem(idToBeRemoved) {
  localStorage.removeItem(idToBeRemoved);
  updateCart();
}

function addItem(idToBeAdded) {
  for (let i = 0; i < maxQtyItems; i++) {
    if(qtyById[i]?.Id == idToBeAdded) qtyById[i].qty = qtyById[i].qty + 1;
  }
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
  let found = false;
  for (let i = 0; i < productIds.length; i++) {
    if (getLocalStorage(productIds[i]) != null) {
      const cartItem = getLocalStorage(productIds[i]);
      for (let j = 0; j < maxQtyItems; j++) {
        if(qtyById[j]?.Id == productIds[i]){
          found = true;
          priceToDisplay = priceToDisplay + (cartItem.ListPrice * qtyById[j]?.qty );
        }
      }
      if(!found) priceToDisplay +=  cartItem.ListPrice;
    }
  }
  return CurrencyFormatted(priceToDisplay);
}

function CurrencyFormatted(amount) {
	var i = parseFloat(amount);
	if(isNaN(i)) { i = 0.00; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	i = parseInt((i + .005) * 100);
	i = i / 100;
	var s = new String(i);
	if(s.indexOf('.') < 0) { s += '.00'; }
	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
	s = minus + s;
	return s;
}

loadHeaderFooter();
updateCart();
