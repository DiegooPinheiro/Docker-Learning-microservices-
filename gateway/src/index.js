const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// Proxy rules
app.use('/products', createProxyMiddleware({ 
  target: 'http://products-service:3002', 
  changeOrigin: true,
  logger: console
}));
app.use('/users', createProxyMiddleware({ 
  target: 'http://users-service:3001', 
  changeOrigin: true,
  logger: console
}));

app.get('/', (req, res) =>  res.send('API Gateway OK'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
