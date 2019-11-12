//dependencies and imports
const express = require('express');

const apiRouter = require('./routers/api-router');
const configureMiddleware = require('./middleware/configure-middleware');

//server
const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);

//export
module.exports = server;
