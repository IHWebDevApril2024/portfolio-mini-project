const closeIconElement = document.querySelector("#close-menu");
const burgerIconElement = document.querySelector("#menu-icon");

const menuElement = document.querySelector("#menu");

closeIconElement.addEventListener("click", () => {
  menuElement.classList.add("hidden");
});

burgerIconElement.addEventListener("click", () => {
  menuElement.classList.remove("hidden");
});


