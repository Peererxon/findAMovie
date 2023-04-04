import { uuidv4 } from "./utils";

export default class AuthService {
  static getUsers() {
    const items = localStorage.getItem("users");
    return JSON.parse(items);
  }
  static signUpUser({ email, password }) {
    const users = this.getUsers();

    // This if is for when not users exist
    if (!users) {
      const uuid = uuidv4();
      localStorage.setItem(
        "users",
        JSON.stringify([{ uuid, email, password }])
      );
      alert(`Not users found`);
      return;
    }

    const userExists = this.checkIfExists(email);

    // This is for when user already exists
    if (userExists === true) {
      alert("User already exists, please sign in");
      return;
    }

    const uuid = uuidv4();

    users.push({ uuid, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert(`Account created!`);

    window.location.href = "/";
  }
  static checkIfExists(email) {
    const users = this.getUsers();

    if (users) {
      const match = users.find((user) => user.email === email);

      if (match) {
        return true;
      }

      return false;
    } else {
      return false;
    }
  }
  static login({ email, password }) {
    const users = this.getUsers();

    // This if is for when the user doesn't exist
    if (!users) {
      alert("The credentials do not match our records!");
      return;
    }

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    // This is for when user does not exist
    if (user === undefined) {
      alert("The credentials do not match our records!");
      return;
    }

    localStorage.setItem(
      "session",
      JSON.stringify({ logged: true, uuid: user.uuid, email: user.email })
    );

    alert("Logged");

    window.location.href = "/";
  }
  static logout() {
    localStorage.removeItem("session");

    window.location.href = "/";
  }
  static getUserSession() {
    const parsed = JSON.parse(localStorage.getItem("session"));
    return parsed;
  }
  // This method protects actions in the app
  static canDoAction() {
    const isLogged = localStorage.getItem("session");

    if (!isLogged) {
      alert("You have to login to perfom this action");
      return false;
    }
    return true;
  }
}
