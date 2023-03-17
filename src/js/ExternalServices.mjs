const baseURL = "http://server-nodejs.cit.byui.edu:3000/"

async function convertToJson(response) {
  const responseJSON = await response.json();
  // Code to test response retrieved: console.log(responseJSON)
  if (response.ok) {
    return responseJSON;
  } else {
    throw { name: 'servicesError', message: responseJSON };
  }
}

export default class ExternalServices {
  constructor() {
    this.categories = ["tents", "backpacks", "sleeping-bags", "hammocks"];
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

  async loginRequest(credentials) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }

    const response = await fetch(baseURL + "login", options).then(convertToJson);
    return response.accessToken;
  }

  async ordersRequest(token) {
    const options = {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    const response = await fetch(baseURL + "orders/", options).then(convertToJson);
    return response;
  }
}