import AuthService from "./AuthService";

const user = AuthService.getUserSession();

if (user) {
  document.querySelector(".signup").remove();
  document.querySelector(".login").remove();
  // desktop
  document.querySelector("#login-desktop").remove();
  document.querySelector("#signup-desktop").remove();
} else {
  document.querySelector(".logout").remove();
  document.querySelector("#logout-desktop").remove();
}
