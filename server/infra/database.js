const pgp = require('pg-promise')();
const db = pgp({
    host: 'localhost',
    user: 'postgres',
    password: '123',
    port: '5432',
    database: 'postgres'
});

module.exports = db;