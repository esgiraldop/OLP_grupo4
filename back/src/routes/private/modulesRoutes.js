const express = require('express')
const {getAll, getByLanguageId, addModule, updateModule, deleteModule } = require('../../controllers/modulesController')

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getByLanguageId)
router.post('/', addModule)
router.put('/', updateModule)
router.delete('/', deleteModule)

module.exports = router