const bcrypt = require("bcrypt");

async function verifyPassword() {
  const myPassword = "Passw0rd!";
  const hash = await bcrypt.hash(myPassword, 10);
  console.log(hash);
}

verifyPassword();
