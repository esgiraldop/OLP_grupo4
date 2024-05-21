const express = require('express')
const authRoutes = require('./public/authRoutes');
const userRoutes = require('./private/userRoutes');
const generalRoutes = require('./private/generalRoutes');
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/general', authMiddleware, generalRoutes)

module.exports = router;