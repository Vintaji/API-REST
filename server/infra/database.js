const pgp = require('pg-promise')();

const {
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_HOST,
    POSTGRES_PORT,
} = process.env;

const db = pgp({
    host: POSTGRES_HOST || 'localhost',
    port: POSTGRES_PORT || '5432',
    database: POSTGRES_DB || 'postgres',
    user: POSTGRES_USER || 'postgres',
    password: POSTGRES_PASSWORD || '123',
});

module.exports = db;