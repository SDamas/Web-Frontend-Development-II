function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  getData() {
    /* TODO: Organize data in descending order, so products will be grouped together.
    Currently, tents are being displayed sorted in index.html.
    */
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}
