
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
    // Wait for the list
    const list = await this.dataSource.getData(this.category);
    this.renderList(list);
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}

export function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="../product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Images.PrimaryMedium}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
  <button class="quick-view-btn" data-product-id="${product.Id}">Quick view</button>
  <div class="quick-view-modals" id="quick-view-modal-${product.Id}">
  <p>Color: ${product.Colors[0].ColorName}</p>
  <p id="quick-view-discount">$${(product.SuggestedRetailPrice - product.FinalPrice).toFixed(2)} OFF!</p>
  </div>
</li>`;
}