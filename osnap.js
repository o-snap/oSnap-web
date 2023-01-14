
var msg = "Hello World";
console.log(msg);

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



