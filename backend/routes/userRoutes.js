const express = require('express');
const { register, login, listUsers, updateStatus, deleteUserHandler } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// router.get('/users', authMiddleware, listUsers);
// router.put('/users/status', authMiddleware, updateStatus);

router.get('/users', listUsers);
router.put('/users/status', updateStatus);

router.delete('/users', deleteUserHandler);


module.exports = router;
