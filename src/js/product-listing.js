import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { getParam } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

// Get parameter from URL
const category = getParam("category");

// Update page title with current category being displayed
document.title = `Top Products: ${category}`;

// Initialize class to access products data
const dataSource = new ExternalServices();

// Get html element to display product list
const element = document.querySelector(".product-list");

// Initialize class to render product list
const listing = new ProductList(category, dataSource, element);

// Render product list
listing.init();

// Add quick view modal funcionality
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    // Get all quick view buttons
    const quickViewButtons = document.querySelectorAll(".quick-view-btn");
    quickViewButtons.forEach((button) => {
      // Add click event
      button.addEventListener("click", (event) => {
        // When button clicked, get productId
        const productId = event.target.dataset.productId;
        // Get quick view modal for that productId
        const modal = document.querySelector(`#quick-view-modal-${productId}`);
        // Add or remove show class
        modal.classList.toggle("show");
      });
    });
  }, 1400);
});

// Add sort by functionality

// Get sort by buttons
const sortByNameBtn = document.querySelector("#sort-by-name");
const sortByPriceBtn = document.querySelector("#sort-by-price");

sortByNameBtn.addEventListener("click", sortByName);
sortByPriceBtn.addEventListener("click", sortByPrice);

function sortByName() {
  sortBy(this.textContent)
}

function sortByPrice() {
  sortBy(this.textContent);
}

function sortByDefault() {
  sortBy(this.textContent)
}

// This function takes a string parameter 'filter' and sorts a list of products
function sortBy(filter) {

  if (filter.toLowerCase() === "price") {
    // Get the current list of products
    const products = Array.from(element.children);
    const sortedProducts = products.sort((a, b) => {
      // Parse the price value of productA and productB as an integer and remove any $ or . characters
      const productA = parseInt((a.children[0].children[3].textContent).replace(/[$.]/g, "")); 
      const productB = parseInt((b.children[0].children[3].textContent).replace(/[$.]/g, ""));
      
      // Return the result of the comparison between productA and productB
      return sortProductAProductB(productA, productB);
    })
    renderSortedProducts(sortedProducts);

  } else if (filter.toLowerCase() === "name") {
    // Get the current list of products
    const products = Array.from(element.children);
    const sortedProducts = products.sort((a, b) => {
      // Get the name values of productA and productB
      const productA = a.children[0].children[1].textContent;
      const productB = b.children[0].children[1].textContent;

      // Return the result of the comparison between productA and productB
      return sortProductAProductB(productA, productB);
    })
    renderSortedProducts(sortedProducts);
  }
}

function sortProductAProductB(productA, productB) {
  if (productA < productB) {
    return -1;
  }
  if (productA > productB) {
    return 1;
  }
  return 0;
}

function renderSortedProducts(sortedProducts) {
  // Convert the sorted products into an array of HTML strings and join them into a single string
  const html = sortedProducts.map(li => li.outerHTML).join(""); 
  // Update the HTML content of the element with the sorted list of products
  element.innerHTML = html; 
}