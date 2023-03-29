import LocalStorage from "./LocalstorageService";

const deleteButtons = document.querySelectorAll(".deleteButton");

deleteButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    LocalStorage.removeItem(e.target.getAttribute("data-src"));
    location.reload(true);
  });
});
