const express = require('express');
const { getAllAccessoriesInfo, getUserInfoById, addAccesory2Avatar, deleteAccesory2Avatar} = require('../../controllers/storeController');

const router = express.Router();

router.get('/', getAllAccessoriesInfo)
router.get('/usrinfo/:id', getUserInfoById)
router.post('/', addAccesory2Avatar)
router.delete('/', deleteAccesory2Avatar);

module.exports = router;