import AuthService from "./AuthService";

const singUpForm = document.querySelector("#singupForm");

singUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;

  const password = document.querySelector("#password").value;

  AuthService.login({ email, password });
});
