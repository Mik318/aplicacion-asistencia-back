const possport = require('passport')

const LocalStrategy = require('./strategies/local.strategy')

possport.use(LocalStrategy)
