const jwt = require('jsonwebtoken')

const secret = 'assistenciaIPN'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2NzcxNjA2M30.ZrANPnbPPHo5gynk6LNvOb2BU6rx0jQ9gQquxSoZl-o'

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payLoad = verifyToken(token, secret);

console.log(payLoad)
