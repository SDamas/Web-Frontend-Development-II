import { setLocalStorage, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import { ProductDetails } from "./ProductDetails.mjs";

const productId = getParam("product");
const dataSource = new ProductData("tents");
console.log(dataSource);

const product = new ProductDetails(productId, dataSource)
product.init();
product.renderProductDetails();


function addProductToCart(product) {
  setLocalStorage(product.Id, product);
  //setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  // Imprime o produto da página atual
  console.log(product)
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

// Imprime o valor do parâmetro na URL
// console.log(getParam('product'));
