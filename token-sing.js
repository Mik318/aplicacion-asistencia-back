const jwt = require('jsonwebtoken')

const secret = 'assistenciaIPN'
const payload = {
  sub: 1,
}

function singToken(payload, secret) {
  return jwt.sign(payload, secret);
}

const token = singToken(payload, secret);

console.log(token)
