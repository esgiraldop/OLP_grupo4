const express = require('express');
const { getAll, getById, addLanguage, deleteLanguage} = require('../../controllers/languagesController');

const router = express.Router();

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', addLanguage)
// Update language?
router.delete('/', deleteLanguage);

module.exports = router;