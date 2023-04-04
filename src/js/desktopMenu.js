import AuthService from "./AuthService";

const logoutButton = document.querySelector("#logout-desktop");

logoutButton.addEventListener("click", () => {
  AuthService.logout();
});
