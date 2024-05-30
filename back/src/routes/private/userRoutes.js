const express = require('express');
const { getAll, getById, update, delete: deleteUser, updateUsrPoints } = require('../../controllers/userController');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.patch('/updateUsrPoints/:id', updateUsrPoints);
router.delete('/:id', deleteUser);

module.exports = router;