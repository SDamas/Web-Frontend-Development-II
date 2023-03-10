// This is the alert feature for the product listing page

export default class Alert {
  constructor(alerts) {
    this.alerts = alerts
  }
  renderAlerts() {
    if (this.alerts) {
      const sectionElement = document.createElement("section");
      sectionElement.classList.add("alert-list");

      this.alerts.forEach((alert) => {
        const paragraphElement = document.createElement("p");
        // Apply the background and foreground colors
        paragraphElement.style.backgroundColor = alert.background;
        paragraphElement.style.color = alert.color;
        paragraphElement.textContent = alert.message;
        // Append alert to section
        sectionElement.appendChild(paragraphElement);
      });

      // Prepend section to main
      document.querySelector("main").prepend(sectionElement);
    }
  }
}