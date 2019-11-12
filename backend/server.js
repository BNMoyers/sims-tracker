//dependencies and imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStorage = require('connect-session-knex')(session);

const apiRouter = require('./routers/api-router');
const configureMiddleware = require('./middleware/configure-middleware');
const knexConnection = require('./data/dbConfig');

//server
const server = express();

//middleware
configureMiddleware(server);
const sessionConfiguration = {
    name: "topsecretspystuff",
    secret: process.env.COOKIE_SECRET || "these are not the cookies you are looking for",
    cookie: {
        maxAge: 3600000,
        secure: process.env.NODE_ENV === 'development' ? false : true,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: true, //for dev only; switch these two values before deploy
    store: new KnexSessionStorage({
        knex: knexConnection,
        clearInterval: 600000,
        tablename: 'user_sessions',
        sidfieldname: 'id',
        createtable: true

    })
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfiguration));

server.use('/api', apiRouter);

//export
module.exports = server;
