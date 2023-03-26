// Get modal elements
const modalBackground = document.querySelector("#modal-background");
const modal = document.querySelector("#modal");
const closeModalBtn = document.querySelector("#close-modal-btn");
const registerBtn = document.querySelector("#register-btn");

// Open modal 10s after user's first visit
setTimeout(() => {
  const firstVisit = localStorage.getItem("firstVisit");
  if (firstVisit === null) {
    modalBackground.classList.add("show");
    modal.classList.add("show");

    /* Default pointer-events is set to "none" so users can't hover or select modal elements before it is showed on the screen.
    Because of that, here pointer-events are set to auto, allowing mouse interactions. */
    modalBackground.style.pointerEvents = "auto";
    modal.style.pointerEvents = "auto";

    localStorage.setItem("firstVisit", false);
  }
}, 10000);

modalBackground.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);
registerBtn.addEventListener("click", closeModal);

function closeModal() {
  modalBackground.style.display = "none";
  modal.style.display = "none";
}
