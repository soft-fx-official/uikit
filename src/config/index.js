const merge = require('lodash/merge')

const mainConfig = require('./configs/main.js')
const mainLocalConfig = require('./configs/main.local.js')
const configuration = require('./configuration.js')

const config = configuration[mainConfig.appName]
  ? configuration[mainConfig.appName][process.env.REACT_APP_BRANCH]
  : undefined

module.exports =
  process.env.NODE_ENV === 'production'
    ? merge(mainConfig, config)
    : merge(mainConfig, mainLocalConfig)
