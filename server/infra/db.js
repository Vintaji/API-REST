const mysql = require('mysql');
const db = mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    port: 3306,
    database: 'blog'
});

module.exports = db;