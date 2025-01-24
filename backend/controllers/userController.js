const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerUser, getUserByEmail, getAllUsers, updateUserStatus } = require('../models/userModel');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await registerUser(name, email, hashedPassword);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log('Login attempt:', { email });
        const user = await getUserByEmail(email);
        console.log('Fetched user:', user);

        if (!user) {
            console.log('User not found');
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        console.log('Password match:', isPasswordCorrect);

        if (!isPasswordCorrect) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        if (user.status === 'blocked') {
            return res.status(403).json({ error: 'User is blocked' });
        }

        console.log('JWT_SECRET:', process.env.JWT_SECRET);
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Generated token:', token);

        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Failed to login' });
    }
};


const listUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        if (!users.length) {
            return res.status(404).json({ error: 'No users found' });
        }
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

const updateStatus = async (req, res) => {
    const { userIds, status } = req.body;

    try {
        for (const userId of userIds) {
            await updateUserStatus(userId, status);
        }
        res.json({ message: 'Status updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user status' });
    }
};

module.exports = { register, login, listUsers, updateStatus };
