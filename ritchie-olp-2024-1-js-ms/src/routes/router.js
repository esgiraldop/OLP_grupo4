const express = require('express')
const authRoutes = require('./public/authRoutes');
const userRoutes = require('./private/userRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

module.exports = router;