// Get newsletter elements
const newsletterSignupSection = document.querySelector("#newsletter-signup");
const newsletterSignupBtn = document.querySelector("#newsletter-signup-btn");

// When signup button is clicked, show user the signup happened
newsletterSignupBtn.addEventListener("click", displayMessage)

function displayMessage(e) {
  e.preventDefault();
  // Get user name and email
  const email = document.querySelector("#email");
  const name = document.querySelector("#name");

  // If both inputs are valid, display confirmation email sent
  if (email.validity.valid && name.validity.valid) {
    newsletterSignupSection.innerHTML = ""
    newsletterSignupSection.innerHTML = `&#x2714; Yeah! We've sent an e-mail to: ${email.value} to confirm your subscription.`
    newsletterSignupSection.style.background = "#e67d20"
    newsletterSignupSection.style.color = "white"
    // If any of them is empty, display message to fill the fields correctly
  } else {
    document.querySelector("#invalid-input-message").textContent = "Please fill in all fields correctly."
  }
}