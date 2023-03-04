import { setLocalStorage, getQtyItens, loadHeaderFooter } from "./utils.mjs";

export function renderCartContents() {
  let cartItems = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    cartItems.push(key);
  }

  /* This is a test comment to see the items in the cart 
  console.log(cartItems) */

  let htmlItems = "";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    htmlItems = [...htmlItems, cartItemTemplate(value)];
  }

  if (htmlItems)
    document.querySelector(".product-list").innerHTML = htmlItems?.join("");
  else document.querySelector(".product-list").innerHTML = "";
}

function cartItemTemplate(itemJson) {
  const item = JSON.parse(itemJson);
  /* This is a test comment to see the object of each item 
  console.log(item)
  */
  const newItem = `<div class="row">
  <li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${item.Images.PrimarySmall}"
        alt="${item.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: ${item.qty} <i class="fa fa-cart-plus fa-2x" id="addQty${item.Id}"" data-id="addQtyItem${item.Id}"></i></p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
    <div id="removeItem">
      <i class="fa fa-trash-o fa-1x" id="removeFromCart${item.Id}"" data-id="removeItem"></i>
    </div>
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
  //Tends
  if (document.getElementById("addQty989CH"))
    document
      .getElementById("addQty989CH")
      .addEventListener("click", addItem.bind(this, "989CH"));

  if (document.getElementById("addQty880RT"))
    document
      .getElementById("addQty880RT")
      .addEventListener("click", addItem.bind(this, "880RT"));

  if (document.getElementById("addQty880RR"))
    document
      .getElementById("addQty880RR")
      .addEventListener("click", addItem.bind(this, "880RR"));

  if (document.getElementById("addQty543DR"))
    document
      .getElementById("addQty543DR")
      .addEventListener("click", addItem.bind(this, "543DR"));

  if (document.getElementById("addQty985MD"))
    document
      .getElementById("addQty985MD")
      .addEventListener("click", addItem.bind(this, "985MD"));

  if (document.getElementById("addQty344YK"))
    document
      .getElementById("addQty344YK")
      .addEventListener("click", addItem.bind(this, "344YK"));

  if (document.getElementById("addQty985PR"))
    document
      .getElementById("addQty985PR")
      .addEventListener("click", addItem.bind(this, "985PR"));

  if (document.getElementById("addQty344YJ"))
    document
      .getElementById("addQty344YJ")
      .addEventListener("click", addItem.bind(this, "344YJ"));

  if (document.getElementById("addQty989CG"))
    document
      .getElementById("addQty989CG")
      .addEventListener("click", addItem.bind(this, "989CG"));

  if (document.getElementById("addQty985KU"))
    document
      .getElementById("addQty985KU")
      .addEventListener("click", addItem.bind(this, "985KU"));

  if (document.getElementById("addQty15UHG"))
    document
      .getElementById("addQty15UHG")
      .addEventListener("click", addItem.bind(this, "15UHG"));

  if (document.getElementById("addQty15UGY"))
    document
      .getElementById("addQty15UGY")
      .addEventListener("click", addItem.bind(this, "15UGY"));

  if (document.getElementById("addQty543DT"))
    document
      .getElementById("addQty543DT")
      .addEventListener("click", addItem.bind(this, "543DT"));

  if (document.getElementById("addQty20DRU"))
    document
      .getElementById("addQty20DRU")
      .addEventListener("click", addItem.bind(this, "20DRU"));
  //Backpacks
  if (document.getElementById("addQty20CXG"))
    document
      .getElementById("addQty20CXG")
      .addEventListener("click", addItem.bind(this, "20CXG"));

  if (document.getElementById("addQty28UPM"))
    document
      .getElementById("addQty28UPM")
      .addEventListener("click", addItem.bind(this, "28UPM"));

  if (document.getElementById("addQty20FAJ"))
    document
      .getElementById("addQty20FAJ")
      .addEventListener("click", addItem.bind(this, "20FAJ"));

  if (document.getElementById("addQty889PR"))
    document
      .getElementById("addQty889PR")
      .addEventListener("click", addItem.bind(this, "889PR"));

  if (document.getElementById("addQty665HD"))
    document
      .getElementById("addQty665HD")
      .addEventListener("click", addItem.bind(this, "665HD"));

  if (document.getElementById("addQty28UPU"))
    document
      .getElementById("addQty28UPU")
      .addEventListener("click", addItem.bind(this, "28UPU"));

  if (document.getElementById("addQty223RN"))
    document
      .getElementById("addQty223RN")
      .addEventListener("click", addItem.bind(this, "223RN"));

  if (document.getElementById("addQty445FJ"))
    document
      .getElementById("addQty445FJ")
      .addEventListener("click", addItem.bind(this, "445FJ"));

  if (document.getElementById("addQty889DC"))
    document
      .getElementById("addQty889DC")
      .addEventListener("click", addItem.bind(this, "889DC"));

  if (document.getElementById("addQty31PYK"))
    document
      .getElementById("addQty31PYK")
      .addEventListener("click", addItem.bind(this, "31PYK"));

  if (document.getElementById("addQty20CXC"))
    document
      .getElementById("addQty20CXC")
      .addEventListener("click", addItem.bind(this, "20CXC"));

  if (document.getElementById("addQty28UPR"))
    document
      .getElementById("addQty28UPR")
      .addEventListener("click", addItem.bind(this, "28UPR"));

  if (document.getElementById("addQty889KT"))
    document
      .getElementById("addQty889KT")
      .addEventListener("click", addItem.bind(this, "889KT"));

  if (document.getElementById("addQty20DRP"))
    document
      .getElementById("addQty20DRP")
      .addEventListener("click", addItem.bind(this, "20DRP"));

  if (document.getElementById("addQty20DRD"))
    document
      .getElementById("addQty20DRD")
      .addEventListener("click", addItem.bind(this, "20DRD"));
  //Sleeping Bags
  if (document.getElementById("addQty14GVF"))
    document
      .getElementById("addQty14GVF")
      .addEventListener("click", addItem.bind(this, "14GVF"));

  if (document.getElementById("addQty21KMF"))
    document
      .getElementById("addQty21KMF")
      .addEventListener("click", addItem.bind(this, "21KMF"));

  if (document.getElementById("addQty14GVH"))
    document
      .getElementById("addQty14GVH")
      .addEventListener("click", addItem.bind(this, "14GVH"));

  if (document.getElementById("addQty16PWY"))
    document
      .getElementById("addQty16PWY")
      .addEventListener("click", addItem.bind(this, "16PWY"));

  if (document.getElementById("addQty861PY"))
    document
      .getElementById("addQty861PY")
      .addEventListener("click", addItem.bind(this, "861PY"));

  if (document.getElementById("addQty14GVG"))
    document
      .getElementById("addQty14GVG")
      .addEventListener("click", addItem.bind(this, "14GVG"));

  if (document.getElementById("addQty15KKP"))
    document
      .getElementById("addQty15KKP")
      .addEventListener("click", addItem.bind(this, "15KKP"));

  if (document.getElementById("addQty832UC"))
    document
      .getElementById("addQty832UC")
      .addEventListener("click", addItem.bind(this, "832UC"));

  if (document.getElementById("addQty14HDF"))
    document
      .getElementById("addQty14HDF")
      .addEventListener("click", addItem.bind(this, "14HDF"));

  if (document.getElementById("addQty640GX"))
    document
      .getElementById("addQty640GX")
      .addEventListener("click", addItem.bind(this, "640GX"));

  if (document.getElementById("addQty14HDH"))
    document
      .getElementById("addQty14HDH")
      .addEventListener("click", addItem.bind(this, "14HDH"));

  if (document.getElementById("addQty16PWV"))
    document
      .getElementById("addQty16PWV")
      .addEventListener("click", addItem.bind(this, "16PWV"));

  if (document.getElementById("addQty20GCC"))
    document
      .getElementById("addQty20GCC")
      .addEventListener("click", addItem.bind(this, "20GCC"));

  if (document.getElementById("addQty20GAW"))
    document
      .getElementById("addQty20GAW")
      .addEventListener("click", addItem.bind(this, "20GAW"));

  if (document.getElementById("addQty19RKY"))
    document
      .getElementById("addQty19RKY")
      .addEventListener("click", addItem.bind(this, "19RKY"));
  //Hammocks
  if (document.getElementById("addQty12TGM"))
    document
      .getElementById("addQty12TGM")
      .addEventListener("click", addItem.bind(this, "12TGM"));

  if (document.getElementById("addQty483VU"))
    document
      .getElementById("addQty483VU")
      .addEventListener("click", addItem.bind(this, "483VU"));

  if (document.getElementById("addQty15YAH"))
    document
      .getElementById("addQty15YAH")
      .addEventListener("click", addItem.bind(this, "15YAH"));

  if (document.getElementById("addQty697YC"))
    document
      .getElementById("addQty697YC")
      .addEventListener("click", addItem.bind(this, "697YC"));

  if (document.getElementById("addQty627YP"))
    document
      .getElementById("addQty627YP")
      .addEventListener("click", addItem.bind(this, "627YP"));

  if (document.getElementById("addQty880VP"))
    document
      .getElementById("addQty880VP")
      .addEventListener("click", addItem.bind(this, "880VP"));

  if (document.getElementById("addQty880VC"))
    document
      .getElementById("addQty880VC")
      .addEventListener("click", addItem.bind(this, "880VC"));

  if (document.getElementById("addQty827MP"))
    document
      .getElementById("addQty827MP")
      .addEventListener("click", addItem.bind(this, "827MP"));

  if (document.getElementById("addQty17YTY"))
    document
      .getElementById("addQty17YTY")
      .addEventListener("click", addItem.bind(this, "17YTY"));

  if (document.getElementById("addQty26HTN"))
    document
      .getElementById("addQty26HTN")
      .addEventListener("click", addItem.bind(this, "26HTN"));

  if (document.getElementById("addQty26HTK"))
    document
      .getElementById("addQty26HTK")
      .addEventListener("click", addItem.bind(this, "26HTK"));

  if (document.getElementById("addQty15YXH"))
    document
      .getElementById("addQty15YXH")
      .addEventListener("click", addItem.bind(this, "15YXH"));

  if (document.getElementById("addQty22YVD"))
    document
      .getElementById("addQty22YVD")
      .addEventListener("click", addItem.bind(this, "22YVD"));
}

function removeElements(idToBeRemoved) {
  //Tends
  if (document.getElementById("removeFromCart989CH"))
    document
      .getElementById("removeFromCart989CH")
      .addEventListener("click", removeItem.bind(this, "989CH"));

  if (document.getElementById("removeFromCart880RT"))
    document
      .getElementById("removeFromCart880RT")
      .addEventListener("click", removeItem.bind(this, "880RT"));

  if (document.getElementById("removeFromCart880RR"))
    document
      .getElementById("removeFromCart880RR")
      .addEventListener("click", removeItem.bind(this, "880RR"));

  if (document.getElementById("removeFromCart543DR"))
    document
      .getElementById("removeFromCart543DR")
      .addEventListener("click", removeItem.bind(this, "543DR"));

  if (document.getElementById("removeFromCart985MD"))
    document
      .getElementById("removeFromCart985MD")
      .addEventListener("click", removeItem.bind(this, "985MD"));

  if (document.getElementById("removeFromCart344YK"))
    document
      .getElementById("removeFromCart344YK")
      .addEventListener("click", removeItem.bind(this, "344YK"));

  if (document.getElementById("removeFromCart985PR"))
    document
      .getElementById("removeFromCart985PR")
      .addEventListener("click", removeItem.bind(this, "985PR"));

  if (document.getElementById("removeFromCart344YJ"))
    document
      .getElementById("removeFromCart344YJ")
      .addEventListener("click", removeItem.bind(this, "344YJ"));

  if (document.getElementById("removeFromCart989CG"))
    document
      .getElementById("removeFromCart989CG")
      .addEventListener("click", removeItem.bind(this, "989CG"));

  if (document.getElementById("removeFromCart985KU"))
    document
      .getElementById("removeFromCart985KU")
      .addEventListener("click", removeItem.bind(this, "985KU"));

  if (document.getElementById("removeFromCart15UHG"))
    document
      .getElementById("removeFromCart15UHG")
      .addEventListener("click", removeItem.bind(this, "15UHG"));

  if (document.getElementById("removeFromCart15UGY"))
    document
      .getElementById("removeFromCart15UGY")
      .addEventListener("click", removeItem.bind(this, "15UGY"));

  if (document.getElementById("removeFromCart543DT"))
    document
      .getElementById("removeFromCart543DT")
      .addEventListener("click", removeItem.bind(this, "543DT"));

  if (document.getElementById("removeFromCart20DRU"))
    document
      .getElementById("removeFromCart20DRU")
      .addEventListener("click", removeItem.bind(this, "20DRU"));
  //Backpacks
  if (document.getElementById("removeFromCart20CXG"))
    document
      .getElementById("removeFromCart20CXG")
      .addEventListener("click", removeItem.bind(this, "20CXG"));

  if (document.getElementById("removeFromCart28UPM"))
    document
      .getElementById("removeFromCart28UPM")
      .addEventListener("click", removeItem.bind(this, "28UPM"));

  if (document.getElementById("removeFromCart20FAJ"))
    document
      .getElementById("removeFromCart20FAJ")
      .addEventListener("click", removeItem.bind(this, "20FAJ"));

  if (document.getElementById("removeFromCart889PR"))
    document
      .getElementById("removeFromCart889PR")
      .addEventListener("click", removeItem.bind(this, "889PR"));

  if (document.getElementById("removeFromCart665HD"))
    document
      .getElementById("removeFromCart665HD")
      .addEventListener("click", removeItem.bind(this, "665HD"));

  if (document.getElementById("removeFromCart28UPU"))
    document
      .getElementById("removeFromCart28UPU")
      .addEventListener("click", removeItem.bind(this, "28UPU"));

  if (document.getElementById("removeFromCart223RN"))
    document
      .getElementById("removeFromCart223RN")
      .addEventListener("click", removeItem.bind(this, "223RN"));

  if (document.getElementById("removeFromCart445FJ"))
    document
      .getElementById("removeFromCart445FJ")
      .addEventListener("click", removeItem.bind(this, "445FJ"));

  if (document.getElementById("removeFromCart889DC"))
    document
      .getElementById("removeFromCart889DC")
      .addEventListener("click", removeItem.bind(this, "889DC"));

  if (document.getElementById("removeFromCart31PYK"))
    document
      .getElementById("removeFromCart31PYK")
      .addEventListener("click", removeItem.bind(this, "31PYK"));

  if (document.getElementById("removeFromCart20CXC"))
    document
      .getElementById("removeFromCart20CXC")
      .addEventListener("click", removeItem.bind(this, "20CXC"));

  if (document.getElementById("removeFromCart28UPR"))
    document
      .getElementById("removeFromCart28UPR")
      .addEventListener("click", removeItem.bind(this, "28UPR"));

  if (document.getElementById("removeFromCart889KT"))
    document
      .getElementById("removeFromCart889KT")
      .addEventListener("click", removeItem.bind(this, "889KT"));

  if (document.getElementById("removeFromCart20DRP"))
    document
      .getElementById("removeFromCart20DRP")
      .addEventListener("click", removeItem.bind(this, "20DRP"));

  if (document.getElementById("removeFromCart20DRD"))
    document
      .getElementById("removeFromCart20DRD")
      .addEventListener("click", removeItem.bind(this, "20DRD"));
  //Sleeping Bags
  if (document.getElementById("removeFromCart14GVF"))
    document
      .getElementById("removeFromCart14GVF")
      .addEventListener("click", removeItem.bind(this, "14GVF"));

  if (document.getElementById("removeFromCart21KMF"))
    document
      .getElementById("removeFromCart21KMF")
      .addEventListener("click", removeItem.bind(this, "21KMF"));

  if (document.getElementById("removeFromCart14GVH"))
    document
      .getElementById("removeFromCart14GVH")
      .addEventListener("click", removeItem.bind(this, "14GVH"));

  if (document.getElementById("removeFromCart16PWY"))
    document
      .getElementById("removeFromCart16PWY")
      .addEventListener("click", removeItem.bind(this, "16PWY"));

  if (document.getElementById("removeFromCart861PY"))
    document
      .getElementById("removeFromCart861PY")
      .addEventListener("click", removeItem.bind(this, "861PY"));

  if (document.getElementById("removeFromCart14GVG"))
    document
      .getElementById("removeFromCart14GVG")
      .addEventListener("click", removeItem.bind(this, "14GVG"));

  if (document.getElementById("removeFromCart15KKP"))
    document
      .getElementById("removeFromCart15KKP")
      .addEventListener("click", removeItem.bind(this, "15KKP"));

  if (document.getElementById("removeFromCart832UC"))
    document
      .getElementById("removeFromCart832UC")
      .addEventListener("click", removeItem.bind(this, "832UC"));

  if (document.getElementById("removeFromCart14HDF"))
    document
      .getElementById("removeFromCart14HDF")
      .addEventListener("click", removeItem.bind(this, "14HDF"));

  if (document.getElementById("removeFromCart640GX"))
    document
      .getElementById("removeFromCart640GX")
      .addEventListener("click", removeItem.bind(this, "640GX"));

  if (document.getElementById("removeFromCart14HDH"))
    document
      .getElementById("removeFromCart14HDH")
      .addEventListener("click", removeItem.bind(this, "14HDH"));

  if (document.getElementById("removeFromCart16PWV"))
    document
      .getElementById("removeFromCart16PWV")
      .addEventListener("click", removeItem.bind(this, "16PWV"));

  if (document.getElementById("removeFromCart20GCC"))
    document
      .getElementById("removeFromCart20GCC")
      .addEventListener("click", removeItem.bind(this, "20GCC"));

  if (document.getElementById("removeFromCart20GAW"))
    document
      .getElementById("removeFromCart20GAW")
      .addEventListener("click", removeItem.bind(this, "20GAW"));

  if (document.getElementById("removeFromCart19RKY"))
    document
      .getElementById("removeFromCart19RKY")
      .addEventListener("click", removeItem.bind(this, "19RKY"));
  //Hammocks
  if (document.getElementById("removeFromCart12TGM"))
    document
      .getElementById("removeFromCart12TGM")
      .addEventListener("click", removeItem.bind(this, "12TGM"));

  if (document.getElementById("removeFromCart483VU"))
    document
      .getElementById("removeFromCart483VU")
      .addEventListener("click", removeItem.bind(this, "483VU"));

  if (document.getElementById("removeFromCart15YAH"))
    document
      .getElementById("removeFromCart15YAH")
      .addEventListener("click", removeItem.bind(this, "15YAH"));

  if (document.getElementById("removeFromCart697YC"))
    document
      .getElementById("removeFromCart697YC")
      .addEventListener("click", removeItem.bind(this, "697YC"));

  if (document.getElementById("removeFromCart627YP"))
    document
      .getElementById("removeFromCart627YP")
      .addEventListener("click", removeItem.bind(this, "627YP"));

  if (document.getElementById("removeFromCart880VP"))
    document
      .getElementById("removeFromCart880VP")
      .addEventListener("click", removeItem.bind(this, "880VP"));

  if (document.getElementById("removeFromCart880VC"))
    document
      .getElementById("removeFromCart880VC")
      .addEventListener("click", removeItem.bind(this, "880VC"));

  if (document.getElementById("removeFromCart827MP"))
    document
      .getElementById("removeFromCart827MP")
      .addEventListener("click", removeItem.bind(this, "827MP"));

  if (document.getElementById("removeFromCart17YTY"))
    document
      .getElementById("removeFromCart17YTY")
      .addEventListener("click", removeItem.bind(this, "17YTY"));

  if (document.getElementById("removeFromCart26HTN"))
    document
      .getElementById("removeFromCart26HTN")
      .addEventListener("click", removeItem.bind(this, "26HTN"));

  if (document.getElementById("removeFromCart26HTK"))
    document
      .getElementById("removeFromCart26HTK")
      .addEventListener("click", removeItem.bind(this, "26HTK"));

  if (document.getElementById("removeFromCart15YXH"))
    document
      .getElementById("removeFromCart15YXH")
      .addEventListener("click", removeItem.bind(this, "15YXH"));

  if (document.getElementById("removeFromCart22YVD"))
    document
      .getElementById("removeFromCart22YVD")
      .addEventListener("click", removeItem.bind(this, "22YVD"));
}

function removeItem(idToBeRemoved) {
  localStorage.removeItem(idToBeRemoved);
  updateCart();
}

function addItem(idToBeAdded) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    if (key == idToBeAdded) {
      const obj = JSON.parse(value);
      let quantity = parseInt(obj.qty);
      quantity += 1;
      obj.qty = quantity.toString();
      setLocalStorage(key, obj);
    }
  }
  updateCart();
}

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

loadHeaderFooter();
updateCart();
