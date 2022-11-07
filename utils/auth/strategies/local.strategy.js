const { Strategy } = require("passport-local");
const UserService = require("./../../../services/user.service");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");

const service = new UserService();

const LocalStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
  try {
    const user = await service.findByEmail(email);
    if (!user) {
      done(boom.unauthorized, false);
    }
    const isMath = await bcrypt.compare(password, user.password);
    if(!isMath){
      done(boom.unauthorized, false);
    }
    done(null, user);
  } catch (err) {
    done(err, false);
  }
});

module.exports = LocalStrategy;
