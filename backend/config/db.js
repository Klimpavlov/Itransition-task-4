const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Kp11102002',
    database: 'usersdb'
});

module.exports = db;