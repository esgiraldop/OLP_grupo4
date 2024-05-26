const express = require('express');
const userRoutes = require('./userRoutes');
const challengeRoutes = require('./challengeRoutes');
const forumRoutes = require('./forumRoutes');
const generalRoutes = require('./generalRoutes')
const languagesRoutes = require('./languagesRoutes')
const routesRoutes = require('./routesRoutes')
const modulesRoutes = require('./modulesRoutes')
const storeRoutes = require('./storeRoutes')

const router = express.Router();

// Users
router.use('/users', userRoutes);

//Challenges
router.use('/challenges', challengeRoutes);

//Forum
router.use('/forum', forumRoutes);

//General
router.use('/general', generalRoutes)

//Languages
router.use('/languages', languagesRoutes)

router.use('/routes', routesRoutes)
router.use('/modules', modulesRoutes)
router.use('/store', storeRoutes)

module.exports = router;