import ExternalServices from "./ExternalServices.mjs";
import { productCardTemplate } from "./ProductList.mjs";
import { getParam } from "./utils.mjs";
import { renderListWithTemplate } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { filterProductsByPrompt } from "./search-box.js";

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
  // Filter products that match search value
  const filteredProducts = filterProductsByPrompt(search, products);
  // Render list
  renderListWithTemplate(productCardTemplate, element, filteredProducts);
}, 2000);
