const { createProxyMiddleware } = require('http-proxy-middleware')
const baseUrl = '/.netlify/functions/server'

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', { target: '/.netlify/functions/server' })
  )
}
