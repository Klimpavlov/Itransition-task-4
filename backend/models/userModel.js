const db = require('../config/db');

const registerUser = async (name, email, hashedPassword) => {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const [result] = await db.execute(query, [name, email, hashedPassword]);
    return result;
};

const getUserByEmail = async (email) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await db.execute(query, [email]);
    return rows[0];
};

const getAllUsers = async () => {
    try {
        const query = 'SELECT id, name, email, last_login, status FROM users ORDER BY last_login DESC';
        const [rows] = await db.execute(query);
        console.log('Fetched users:', rows);
        return rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch users from database');
    }
};

const updateUserStatus = async (userId, status) => {
    const query = 'UPDATE users SET status = ? WHERE id = ?';
    const [result] = await db.execute(query, [status, userId]);
    return result;
};

module.exports = {
    registerUser,
    getUserByEmail,
    getAllUsers,
    updateUserStatus,
};
