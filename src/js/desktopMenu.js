import AuthService from "./AuthService";

const logoutButton = document.querySelector("#logout-desktop");

if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    AuthService.logout();
  });
}
