
var msg = "Hello World";
console.log(msg);

// account details:
// name (first, last), username, WPI email, password

// if signing up:
let firstName = prompt("First name:" , "First name here");

let lastName = prompt("Last name:" , "");

//let username = prompt("Username:" , "");
//check if username already exists in system, if true, ask for different username

let email = prompt("WPI email:" , "");
let password = prompt("Password:" , "");
let conformPassword = prompt("Confirm password:" , "");

// prompt 2fA after acct creation - sent email page

// if logging in:
prompt("WPI Email:" , "");
prompt("Password:" , "");

//check if username and password match in database


//password is hashed and sent over to API
const argon2 = require('argon2');
async function hashpass() {
try {
  var hash = await argon2.hash("password");
  console.log(hash);
} catch (err) {
  console.log("ERROR");
}
}
hashpass();





