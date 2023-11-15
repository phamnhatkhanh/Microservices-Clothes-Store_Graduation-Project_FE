const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // The path you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:8080', // The target server URL
      changeOrigin: true, // Enable this option to change the origin of the request to match the target server's origin
    })
  );
};
