import ExternalServices from "./ExternalServices.mjs";
import { productCardTemplate } from "./ProductList.mjs";
import { getParam } from "./utils.mjs";
import { renderListWithTemplate } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

// Get parameter from URL
const search = getParam("search");

// Update page title with current category being displayed
document.title = `Sleep Outside: ${search}`;

// Initialize class to access products data
const dataSource = new ExternalServices();

// Get parent element to render the products
const element = document.querySelector(".product-list");

// Get product list
const categories = ["tents", "backpacks", "sleeping-bags", "hammocks"];
let products = [];

for (const category of categories) {
  dataSource
    .getData(category)
    .then((result) => result.forEach((product) => products.push(product)));
}

setTimeout(() => {
  const filteredProducts = filterProductsByPrompt(search, products);
  console.log(filteredProducts);
  // Render list
  renderListWithTemplate(productCardTemplate, element, filteredProducts);
}, 2000);

console.log(products);
// // Filter products that match search value

function filterProductsByPrompt(prompt, list) {
  // TODO: See why list is being returned empty if modified in other line than the return line in the function
  return list;
}
