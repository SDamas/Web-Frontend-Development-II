// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// Loading the product ids
export function getProductsIds() {
  return ["880RR", "985RF", "989CG", "985PR", "880RT", "344YJ"];
}

//Getting quantity of items
export function getQtyItens() {
  let productIds = getProductsIds();
  let qtyItens = 0;
  
  for (let i = 0; i < productIds.length; i++) {
    if (getLocalStorage(productIds[i]) != null){
      qtyItens = qtyItens + 1;
    }
  }
  return qtyItens;
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
// export function setClick(selector, callback) {
//   qs(selector).addEventListener("touchend", (event) => {
//     event.preventDefault();
//     callback();
//   });
//   qs(selector).addEventListener("click", callback);
// }

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

// NOTE: What about the name "renderProductListWithTemplate" instead?
export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  const htmlStrings = list.map(templateFn);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

// This function adds a "grow and shrink" animation to the backpack icon when a new product is added to the cart.
export function animateBackPackIcon() {
  const backpack = document.querySelector("#backpack-icon");
  backpack.classList.add("animate");
  setTimeout(() => {
    backpack.classList.remove("animate")
  }, 310)
}

// function to take an optional object and a template and insert the objects as HTML into the DOM
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  //if there is a callback...call it and pass data
  if (callback) {
    callback(data);
  }
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

// function to dynamically load the header and footer into a page
export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const headerElement = document.querySelector("#main-header");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const footerElement = document.querySelector("#main-footer");

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function filterProductsByPrompt(prompt, list) {
  const filteredProducts = list.filter((product) =>
    product.Name.toLowerCase().includes(prompt)
  );
  return filteredProducts;
}