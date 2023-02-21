import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { getParam } from "./utils.mjs";

// Get category parameter value from URL
const category = getParam("category");

// Update page title with current category being displayed
document.title = `Top Products: ${category}`;

// Initialize class to access products data
const dataSource = new ProductData();

// Get html element to display product list
const element = document.querySelector(".product-list");

// Initialize class to render product list
const listing = new ProductList(category, dataSource, element);

// Render product list
listing.init();
