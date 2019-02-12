'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"/api"', // 接口请求头（proxy代理头）
  ACTUAL_URL: '""' // 代理头转发地址
})
