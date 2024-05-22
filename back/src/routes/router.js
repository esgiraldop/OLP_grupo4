const express = require('express')
const authRoutes = require('./public/authRoutes');
const privateRoutes = require('./private/router');
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();

//Public routes
router.use('/auth', authRoutes);

//Private routes (Activate middleware)
router.use('/priv', privateRoutes);

module.exports = router;