const boom = require('@hapi/boom');
const config = require('./../config/config').config

function checkApiKey(req, res, next) {
  const apiKeyh = req.headers['api'];
  if(apiKeyh === config.apiKey){
    next();
  }else{
    next(boom.unauthorized())
  }
}

module.exports = { checkApiKey };
