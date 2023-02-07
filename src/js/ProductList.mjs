
import { renderListWithTemplate } from "./utils.mjs";

export default class ProductList {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const list = await this.dataSource.getData();

     // NOTE: calling function for "Remove extra products" idea.
    filterProductsById(list, "880RR", "985RF");

    // render the list 
    this.renderList(list);
  }
  // render after doing the first stretch
  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}

function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Image}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
}

/* NOTE: Adding this function for the functionality "Remove extra products" and filter our list of products to just the 4 we need.
And idea of what we could do.
*/
function filterProductsById(list, ...products) {
  console.log("Objetcs being displayed from ProductList.mjs")
  for (const product of list) {
    if (products.includes(product.Id)) {
      console.log(product)
    }
  }
}