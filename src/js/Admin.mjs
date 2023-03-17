import ExternalServices from "./ExternalServices.mjs";

export default class Admin {
  constructor(outputSelector) {
    this.outputElement = document.querySelector(outputSelector);
    this.services = new ExternalServices;
    this.token = null;
    this.orders = null;
  }

  async login(user) {
    try {
      this.token = await this.services.loginRequest(user);
      return this.token;
    }
    catch(error) {
      alert(error.message.message)
    }
  }

  showLogin() {
    // Get the output element and render the login form HTML
    this.outputElement.insertAdjacentHTML("afterbegin", formTemplate());
  
    // Get the login button element and add an event listener to it
    const loginBtn = document.querySelector("#loginBtn");
    loginBtn.addEventListener("click", async (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get the email and password input values from the form
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;
  
      // Create an object containing the email and password credentials
      const credentials = { email, password }; // Use shorthand property names
  
      // Call the login method with the credentials and wait for the response
      await this.login(credentials);

      this.displayOrders("#orders");
    })
  }

  async displayOrders() {
    try {
      // Render table element
      this.outputElement.innerHTML += tableTemplate();
      // Get table body
      const tbody = document.querySelector("tbody");
      // Call the ordersRequest method with the token and wait for the response
      const orders = await this.services.ordersRequest(this.token)

      // Add the orders to the tbody
      tbody.innerHTML = orders.map((order) =>
        `<tr>
          <td>${order.id}</td>
          <td>${new Date(order.orderDate).toLocaleString()}</td>
          <td>${order.items.length}</td>
          <td>${order.state}</td>
          <td>${order.street}</td>
          <td>${order.zip}</td>
          <td>${order.orderTotal}</td>
        </tr>
        `
      )
      // Join them as a single html
      .join("")
    } catch(error) {
      alert(error)
    }
  }
}

function formTemplate() {
  return `
  <form>
  <label for="email">Email</label>
  <input type="email" id="email" value="user1@email.com" required>
  <label for="password">Password</label>
  <input type="password" id="password" value="user1" required>
  <button id="loginBtn">Login</button>
  </form>
  `
}

function tableTemplate(outputSelector) {
  return `
  <table id="my-table">
  <thead>
    <tr>
      <th>Id</th>
      <th>Date</th>
      <th>Items</th>
      <th>State</th>
      <th>Street</th>
      <th>Zip</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
  `
}