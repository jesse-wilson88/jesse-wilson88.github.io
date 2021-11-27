import Auth from "./auth.js";
import { makeRequest } from "./authHelpers.js";

// makeRequest("login", "POST", {
//   password: "user1",
//   email: "user1@email.com",
// });

const myAuth = new Auth();

const loginForm = document.getElementById("login");
loginForm.querySelector("button").addEventListener("click", () => {
  myAuth.login();
});
