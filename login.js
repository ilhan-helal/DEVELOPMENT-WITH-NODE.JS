const prompt = require("prompt-sync")();
function validateLogin(username, password) {
  const validUsername = "admin";
  const validPassword = "123";
  return username === validUsername && password === validPassword;

}
  

const username = prompt("Enter Username: ");
const password = prompt("Enter Password: ");

if (validateLogin(username, password)) {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}