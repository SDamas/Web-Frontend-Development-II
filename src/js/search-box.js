// This file serves the search box functionality. To filter the search box with products that matches what user is typing.
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData();
const categories = ["tents", "backpacks", "sleeping-bags", "hammocks"]

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

    clearTimeout(searchTimeout);

    // Set a new timeout to call filterProducts after a short delay
    searchTimeout = setTimeout(() => {
      const filteredProducts = filterProducts(prompt);
      renderProductsSearchResult(filteredProducts);
    }, 800);
  });
}, 1);

function filterProducts(prompt) {
  const filteredProducts = products.filter((product) => product.Name.toLowerCase().includes(prompt))
  return filteredProducts;
}

function renderProductsSearchResult(products) {
  const datalist = document.querySelector("#products");
  datalist.innerHTML = "";
  products.forEach((product) => {
    const option = new Option(product.Name, product.Id);
    datalist.appendChild(option);
  })
}