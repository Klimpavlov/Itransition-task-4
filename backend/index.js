const express = require('express');
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;

const app = express();

// app.listen(PORT, () => {
//     console.log(`Server starting on port ${PORT}`);
// });
//
// app.get('/api', (req, res)=> {
//     res.json({
//         message: "Hello from backend express js"
//     })
// })

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kp11102002',
    database: 'usersdb'
});

// Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database!');

    // Example query
    connection.query('SELECT * FROM users', (err, results, fields) => {
        if (err) throw err;
        console.log(results);
    });

    // Close the connection
    connection.end();
});

