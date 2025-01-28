const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerUser, getUserByEmail, getAllUsers, getUserById, updateUserStatus, deleteUsers} = require('../models/userModel');

const register = async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await registerUser(name, email, hashedPassword);
        res.status(201).json({message: 'User registered successfully'});
    } catch (error) {
        res.status(500).json({error: 'Failed to register user'});
    }
};

const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        console.log('Login attempt:', {email});
        const user = await getUserByEmail(email);
        console.log('Fetched user:', user);

        if (!user) {
            console.log('User not found');
            return res.status(401).json({error: 'Invalid email or password'});
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        console.log('Password match:', isPasswordCorrect);

        if (!isPasswordCorrect) {
            return res.status(401).json({error: 'Invalid email or password'});
        }

        if (user.status === 'blocked') {
            return res.status(403).json({error: 'User is blocked'});
        }

        console.log('JWT_SECRET:', process.env.JWT_SECRET);
        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        console.log('Generated token:', token);

        res.json({token});
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({error: 'Failed to login'});
    }
};

const getCurrentUser = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await getUserById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching current user:', error);
        res.status(500).json({ error: 'Failed to fetch current user' });
    }
};


const listUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        if (!users.length) {
            return res.status(404).json({error: 'No users found'});
        }
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({error: 'Failed to fetch users'});
    }
};

const updateStatus = async (req, res) => {
    const {userIds, status} = req.body;

    try {
        for (const userId of userIds) {
            await updateUserStatus(userId, status);
        }
        res.json({message: 'Status updated successfully'});
    } catch (error) {
        res.status(500).json({error: 'Failed to update user status'});
    }
};

const deleteUserHandler = async (req, res) => {
    const {userIds} = req.body; // Передаём массив userIds в запросе

    if (!Array.isArray(userIds) || userIds.length === 0) {
        return res.status(400).json({error: 'Invalid or empty userIds array'});
    }

    try {
        await deleteUsers(userIds);
        res.json({message: 'Users deleted successfully'});
    } catch (error) {
        console.error('Error deleting users:', error);
        res.status(500).json({error: 'Failed to delete users'});
    }
};


module.exports = {register, login, getCurrentUser, listUsers, updateStatus, deleteUserHandler};
