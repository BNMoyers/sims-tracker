//dependencies
const express = require('express');
const helmet = require('helmet');
const cors =  require('cors');

//exports
module.exports = server => {
    server.use(helmet());
    server.use(express.json());
    server.use(cors());
}