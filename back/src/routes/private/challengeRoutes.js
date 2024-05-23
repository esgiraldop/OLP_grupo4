const express = require('express');
const { getAll, getByModuleId, addChallenge, updateChallenge, deleteChallenge} = require('../../controllers/challengeController');

const router = express.Router();

router.get('/', getAll)
router.get('/:id', getByModuleId)
router.post('/', addChallenge)
router.put('/', updateChallenge)
router.get('/', deleteChallenge)

module.exports = router;