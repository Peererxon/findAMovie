import AuthService from "./AuthService";

const user = AuthService.getUserSession();

if (user) {
  document.querySelector(".signup").remove();
  document.querySelector(".login").remove();
} else {
  document.querySelector(".logout").remove();
}
