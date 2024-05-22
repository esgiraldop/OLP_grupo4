const express = require('express');
const { getAll, getById, addRoute, deleteRoute} = require('../../controllers/routesController');

const router = express.Router();

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', addRoute)
// Update route?
router.delete('/', deleteRoute);

module.exports = router;