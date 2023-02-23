import { setLocalStorage } from "./utils.mjs";
import { animateBackPackIcon } from "./utils.mjs";

export class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.dataSource = dataSource;
    this.product = {};
  }

  async init() {
    // Get product data from remote url
    this.product = await this.dataSource.findProductById(this.productId);

    // Render the product details into the .product-details html element
    this.renderProductDetails(".product-details");

    /* This line adds the addToCart function to the addToCart html element in the page. It binds the "this"
    instance from this class. So, when the function is called, all the "this" calls refer to this class instance,
    initialized in the page, instead of the element calling the function.*/ 
    document.getElementById('addToCart')
            .addEventListener('click', this.addToCart.bind(this));
  }

  // This function sets the product'a id and json to the LocalStorage.
  // Then, it calls the animateBackPackIcon function to represent a product was added to the cart.
  addToCart() {
    if(localStorage.getItem(this.productId)){
      console.log(this.productId, " already is in local storage!");
      this.product.qty += 1;    
    }else{
      console.log(this.productId, " was not in local storage!");
      this.product.qty = 1;
      setLocalStorage(this.productId, this.product);
    }
    //animateBackPackIcon()
  }

  // This function renders the product details into the given html selector
  renderProductDetails(selector) {
    // Get html selector
    const element = document.querySelector(selector);
    // Render product details using template
    element.insertAdjacentHTML(
      "afterBegin",
      productDetailsTemplate(this.product)
    );
  }
}

// This function is the template used to render the product details. It receives a json object as parameter.
function productDetailsTemplate(product) {
  return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Images.PrimaryLarge}"
      alt="${product.NameWithoutBrand}"
    />
    <div class="discount" id="discount" >
      <span>Discount $${CurrencyFormatted(product.SuggestedRetailPrice - product.FinalPrice)}</span>
    </div>
    <p class="product-card__price">Price $${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div></section>`;
}

function CurrencyFormatted(amount) {
	var i = parseFloat(amount);
	if(isNaN(i)) { i = 0.00; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	i = parseInt((i + .005) * 100);
	i = i / 100;
	var s = new String(i);
	if(s.indexOf('.') < 0) { s += '.00'; }
	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
	s = minus + s;
	return s;
}