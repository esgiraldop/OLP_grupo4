const express = require('express')
const {getAllT} = require('../../controllers/generalController')

const router = express.Router()

router.get('/tables', getAllT)

module.exports = router