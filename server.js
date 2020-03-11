const express = require('express');
const logger = require('./common/logger-middle-ware.js');


const server = express();

server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

module.exports = server;
