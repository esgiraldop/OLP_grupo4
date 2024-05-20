const express = require('express');
const { register, login, verifyToken, test,  } = require('../../controllers/authController');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/verify-token', verifyToken)
router.get('/test', test)

module.exports = router;
