const hamburgerButton = document.querySelector("#hamburgerButton");
const closeCrossHairButton = document.querySelector("#close-crosshair");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerButton.addEventListener("click", () => {
  hamburgerMenu.classList.remove("hidden");
});

closeCrossHairButton.addEventListener("click", () => {
  hamburgerMenu.classList.add("hidden");
});
