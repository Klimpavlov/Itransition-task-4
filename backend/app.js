// const express = require('express');
// const mysql = require('mysql2');
//
// const PORT = process.env.PORT || 3001;
//
// const app = express();
//
// app.listen(PORT, () => {
//     console.log(`Server starting on port ${PORT}`);
// });
//
// // app.get('/api', (req, res)=> {
// //     res.json({
// //         message: "Hello from backend express js"
// //     })
// // })
//
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Kp11102002',
//     database: 'usersdb'
// });
//
// // Connect to the database
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Database!');
// });
//
//
// app.get('/api', (req, res) => {
//     connection.query('SELECT * FROM users', (err, results,fields) => {
//         if (err){
//             console.error('Error request:', err.message);
//             res.status(500).json({ error: 'Server error' });
//             return;
//         }
//         res.json(results);
//         console.log(results);
//     });
// });


const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
