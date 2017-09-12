// config.js

const fs = require('fs'); 

const config = {
  cert: fs.readFileSync('certificates/certificate.pem'),
  key: fs.readFileSync('certificates/private-key.pem'),
  port: 443
};

exports.key = config.key;
exports.cert = config.cert;
exports.port = config.port;