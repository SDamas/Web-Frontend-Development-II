// This file serves the search box functionality. To filter the search box with products that matches what user is typing.
import ExternalServices from "./ExternalServices.mjs";

const dataSource = new ExternalServices();
const categories = ["tents", "backpacks", "sleeping-bags", "hammocks"];
const products = [];

for (const category of categories) {
  dataSource.getData(category).then((result) =>
    result.forEach((product) => {
      products.push(product);
    })
  );
}

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
    }, 500);
  });
}, 1000);

function renderProductsSearchResult(list) {
  const datalist = document.querySelector("#products");
  datalist.innerHTML = "";
  list.forEach((product) => {
    const option = new Option(product.Name, product.Id);
    datalist.appendChild(option);
  });
}

export function filterProductsByPrompt(prompt, list) {
  // TODO: See why list is being returned empty if modified in other line than the return line in the function
  return list.filter((product) => product.Name.toLowerCase().includes(prompt));
}
