// index.js

const https = require('https');
const config = require('./config.js');
var app = require('./app/index.js');

var server = https.createServer(config, app.listener);

server.listen(config.port, (err) => {
  if (err)
    return console.log(err);
  
  console.log("Server is listening on port " + config.port + ".");
});