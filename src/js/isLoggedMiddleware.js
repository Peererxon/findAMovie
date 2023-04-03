import AuthService from "../js/AuthService";

const user = AuthService.getUserSession();

if (!user) {
  window.location.href = "/auth/login.html";
}
