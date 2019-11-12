//imports
const knex = require('knex');
const knexConfig = require('../../knexfile');

const environment = process.env.NODE_ENV || 'development';


//export
module.exports = knex(knexConfig.development);