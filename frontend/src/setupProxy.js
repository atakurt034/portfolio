const { createProxyMiddleware } = require('http-proxy-middleware')
const basePath = '/.netlify/functions/server'

module.exports = function (app) {
  app.use(createProxyMiddleware(basePath, { target: 'http://localhost:5000' }))
}
