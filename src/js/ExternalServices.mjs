const baseURL = "http://server-nodejs.cit.byui.edu:3000/"

function convertToJson(response) {
  const responseJSON = response.json();
  if (response.ok) {
    return "Order sent successfully!"
  } else {
    throw { name: 'servicesError', message: responseJSON };
  }
}

export default class ExternalServices {
  constructor() {
    this.categories = ["tents", "backpacks", "sleeping-bags", "hammocks"];
  }
  async getProducts() {
    const products = [];
    for (const category of this.categories) {
      const data = await this.getData(category);
      products.push(...data);
    }
    return products;
  }

  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }

  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }

  async checkout(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }

    const response = await fetch(baseURL + "checkout/", options);
    return convertToJson(response);
  }
}