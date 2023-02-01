import { getLocalStorage, getProductsIds, getQtyItens } from "./utils.mjs";

export function renderCartContents() {
  // const cartItems = [getLocalStorage("so-cart")];
  let productIds = ["880RR", "985RF", "989CG", "985PR", "880RT", "344YJ"];

  let cartItems = [];

  for (let i = 0; i < productIds.length; i++) {
    if (getLocalStorage(productIds[i]) != null){
      cartItems = [... cartItems, getLocalStorage(productIds[i])];
    }
  }

  return cartItems;
  // const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  // document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

// function cartItemTemplate(item) {
//   const newItem = `<li class="cart-card divider">
//   <a href="#" class="cart-card__image">
//     <img
//       src="${item.Image}"
//       alt="${item.Name}"
//     />
//   </a>
//   <a href="#">
//     <h2 class="card__name">${item.Name}</h2>
//   </a>
//   <p class="cart-card__color">${item.Colors[0].ColorName}</p>
//   <p class="cart-card__quantity">qty: 1</p>
//   <p class="cart-card__price">$${item.FinalPrice}</p>
// </li>`;

//   return newItem;
// }

function removeItem(item) {
  localStorage.removeItem(item);
}

let removeItem880RR = document.querySelector('#removeItem880RR');
let removeItem989CG = document.querySelector('#removeItem989CG');
let removeItem985RF = document.querySelector('#removeItem985RF');
let removeItem985PR = document.querySelector('#removeItem985PR');
let removeItem880RT = document.querySelector('#removeItem880RT');
let removeItem344YJ = document.querySelector('#removeItem344YJ');

removeItem880RR.addEventListener('click', function () {
  document.getElementById("880RR").style.visibility = "hidden";
  document.getElementById("removeItem880RR").style.visibility = "hidden";
  removeItem('880RR');
  displayPrice();
  document.getElementById("lblCartCount").innerHTML = getQtyItens();
});

removeItem989CG.addEventListener('click', function () {
  document.getElementById("989CG").style.visibility = "hidden";
  document.getElementById("removeItem989CG").style.visibility = "hidden";
  removeItem('989CG');
  displayPrice();
  document.getElementById("lblCartCount").innerHTML = getQtyItens();
});

removeItem985RF.addEventListener('click', function () {
  document.getElementById("985RF").style.visibility = "hidden";
  document.getElementById("removeItem985RF").style.visibility = "hidden";
  removeItem('985RF');
  displayPrice();
  document.getElementById("lblCartCount").innerHTML = getQtyItens();
});

removeItem985PR.addEventListener('click', function () {
  document.getElementById("985PR").style.visibility = "hidden";
  document.getElementById("removeItem985PR").style.visibility = "hidden";
  removeItem('985PR');
  displayPrice();
  document.getElementById("lblCartCount").innerHTML = getQtyItens();
});

removeItem880RT.addEventListener('click', function () {
  document.getElementById("880RT").style.visibility = "hidden";
  document.getElementById("removeItem880RT").style.visibility = "hidden";
  removeItem('880RT');
  displayPrice();
  document.getElementById("lblCartCount").innerHTML = getQtyItens();
});

removeItem344YJ.addEventListener('click', function () {
  document.getElementById("344YJ").style.visibility = "hidden";
  document.getElementById("removeItem344YJ").style.visibility = "hidden";
  removeItem('344YJ');
  displayPrice();
  document.getElementById("lblCartCount").innerHTML = getQtyItens();
});

function displayHTML() {
  let carItems = renderCartContents();
  let foundId880RR = false;
  let foundId989CG = false;
  let foundId985RF = false;
  let foundId985PR = false;
  let foundId880RT = false;
  let foundId344YJ = false;

  //working on id 880RR
  for (let i = 0; i < carItems.length; i++) {
    if (carItems[i].Id == "880RR") {
      document.getElementById("880RR").style.visibility = "visible";
      foundId880RR = true;
      document.getElementById("880RR_name").innerHTML = carItems[i].Name;
      document.getElementById("880RR_color").innerHTML = carItems[i].Colors[0].ColorName;
      document.getElementById("880RR_price").innerHTML = carItems[i].FinalPrice;
    }
  }
  if (!foundId880RR) {
    document.getElementById("880RR").style.visibility = "hidden";
    document.getElementById("removeItem880RR").style.visibility = "hidden";
  }
  //working on id 989CG
  for (let i = 0; i < carItems.length; i++) {
    if (carItems[i].Id == "989CG") {
      document.getElementById("989CG").style.visibility = "visible";
      foundId989CG = true;
      document.getElementById("989CG_name").innerHTML = carItems[i].Name;
      document.getElementById("989CG_color").innerHTML = carItems[i].Colors[0].ColorName;
      document.getElementById("989CG_price").innerHTML = carItems[i].FinalPrice;
    }
  }
  if (!foundId989CG) {
    document.getElementById("989CG").style.visibility = "hidden";
    document.getElementById("removeItem989CG").style.visibility = "hidden";
  }
  //working on id 985RF
  for (let i = 0; i < carItems.length; i++) {
    if (carItems[i].Id == "985RF") {
      document.getElementById("985RF").style.visibility = "visible";
      foundId985RF = true;
      document.getElementById("985RF_name").innerHTML = carItems[i].Name;
      document.getElementById("985RF_color").innerHTML = carItems[i].Colors[0].ColorName;
      document.getElementById("985RF_price").innerHTML = carItems[i].FinalPrice;
    }
  }
  if (!foundId985RF) {
    document.getElementById("985RF").style.visibility = "hidden";
    document.getElementById("removeItem985RF").style.visibility = "hidden";
  }
  //working on id 985PR
  for (let i = 0; i < carItems.length; i++) {
    if (carItems[i].Id == "985PR") {
      document.getElementById("985PR").style.visibility = "visible";
      foundId985PR = true;
      document.getElementById("985PR_name").innerHTML = carItems[i].Name;
      document.getElementById("985PR_color").innerHTML = carItems[i].Colors[0].ColorName;
      document.getElementById("985PR_price").innerHTML = carItems[i].FinalPrice;
    }
  }
  if (!foundId985PR) {
    document.getElementById("985PR").style.visibility = "hidden";
    document.getElementById("removeItem985PR").style.visibility = "hidden";
  }
  //working on id 880RT
  for (let i = 0; i < carItems.length; i++) {
    if (carItems[i].Id == "880RT") {
      document.getElementById("880RT").style.visibility = "visible";
      foundId880RT = true;
      document.getElementById("880RT_name").innerHTML = carItems[i].Name;
      document.getElementById("880RT_color").innerHTML = carItems[i].Colors[0].ColorName;
      document.getElementById("880RT_price").innerHTML = carItems[i].FinalPrice;
    }
  }
  if (!foundId880RT) {
    document.getElementById("880RT").style.visibility = "hidden";
    document.getElementById("removeItem880RT").style.visibility = "hidden";
  }
  //working on id 344YJ
  for (let i = 0; i < carItems.length; i++) {
    if (carItems[i].Id == "344YJ") {
      document.getElementById("344YJ").style.visibility = "visible";
      foundId344YJ = true;
      document.getElementById("344YJ_name").innerHTML = carItems[i].Name;
      document.getElementById("344YJ_color").innerHTML = carItems[i].Colors[0].ColorName;
      document.getElementById("344YJ_price").innerHTML = carItems[i].FinalPrice;
    }
  }
  if (!foundId344YJ) {
    document.getElementById("344YJ").style.visibility = "hidden";
    document.getElementById("removeItem344YJ").style.visibility = "hidden";
  }    
}

function displayPrice() {
  let price = getPrice();
  if (price > 0) {
    document.getElementById("cart-footer").style.visibility = "visible";
    document.getElementById("cart-total-value").innerHTML = price;
  }else{
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

renderCartContents();
displayPrice();
displayHTML();
document.getElementById("lblCartCount").innerHTML = getQtyItens();
