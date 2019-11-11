//dependencies and imports
const express = require('express');

const apiRouter = require('./api/api-router');
const configureMiddleware = require('./api/configure-middleware');

//server
const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);

//export
module.exports = server;
