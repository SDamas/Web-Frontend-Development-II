import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);

listing.init();

// Lines 14-? serve the search box functionality. To filter the search box with products that matches what user is typing.
// 1. Get all products
// 2. Get search box input
// 3. Add onchange event listener when user types text into the search box.
// 4. When user types, call filterProducts() with the value in the search box. Store the returned result into
// the filteredProducts variable.
// 5. Create the filterProducts() function. It receives the "prompt" parameter and returns an array of option
// elements containing the filtered products.
// 6. Then, call renderFilteredProducts(). It receives the "filteredProducts" parameter, and store each product
// option in a variable "productOptions". It then gets the datalist element and appends the productOptions variable.