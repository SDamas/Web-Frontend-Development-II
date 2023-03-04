// This file serves the search box functionality. To filter the search box with products that matches what user is typing.
import ProductData from "./ProductData.mjs";
import { filterProductsByPrompt } from "./utils.mjs";

const dataSource = new ProductData();
const categories = ["tents", "backpacks", "sleeping-bags", "hammocks"];

// 1. Get all products
async function getProducts() {
  const products = [];
  for (const category of categories) {
    const data = await dataSource.getData(category);
    products.push(...data);
  }
  return products;
}
const products = await getProducts();

// Get search box input. Wait until element is rendered on the screen.
setTimeout(() => {
  const searchBox = document.querySelector("#search-box");
  let searchTimeout;
  searchBox.addEventListener("input", (event) => {
    const prompt = event.target.value;
    document
      .querySelector("#search")
      .setAttribute("href", `/search/index.html?search=${prompt}`);

    clearTimeout(searchTimeout);

    // Set a new timeout to call filterProducts after a short delay
    searchTimeout = setTimeout(() => {
      const filteredProducts = filterProductsByPrompt(prompt, products);
      renderProductsSearchResult(filteredProducts);
    }, 700);
  });
}, 1);

function renderProductsSearchResult(products) {
  const datalist = document.querySelector("#products");
  datalist.innerHTML = "";
  products.forEach((product) => {
    const option = new Option(product.Name, product.Id);
    datalist.appendChild(option);
  });
}

// This function is called when seach button is clicked. It takes the value in the search box, and
// pass a search parameter with this value.
function addSearchParameter() {}
