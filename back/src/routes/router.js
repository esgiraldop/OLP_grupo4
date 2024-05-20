const express = require('express')
const authRoutes = require('./public/authRoutes');
const userRoutes = require('./private/userRoutes');
const generalRoutes = require('./private/generalRoutes')

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/general', generalRoutes)

module.exports = router;