const express = require('express');
const { getAllUsersInfo, getUserInfoById, addAccesory2Avatar, deleteAccesory2Avatar} = require('../../controllers/storeController');

const router = express.Router();

router.get('/', getAllUsersInfo)
router.get('/:id', getUserInfoById)
router.post('/', addAccesory2Avatar)
router.delete('/', deleteAccesory2Avatar);

module.exports = router;