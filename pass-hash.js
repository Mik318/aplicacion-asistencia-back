const bcrypt = require("bcrypt");

async function hashPassword() {
  const myPassword = "Passw0rd1!";
  const hashPassword = '$2b$10$68MXUY9KdHe4TGLTvmbD.O.ESm.hyY8p0jWSvo9d7pgwHnd12x4KS'
  const hash = await bcrypt.compare(myPassword, hashPassword);
  console.log(hash);
}

hashPassword();
