const express = require('express')
const router = express.Router()
const fighter = require('../controller/fighter')

router.post('/create', fighter.createFighter)
router.get('/all', fighter.getAllFighter)
router.get('/:id', fighter.getFighter)
router.put('/:id', fighter.updateFighter)
router.delete('/:id', fighter.deleteFighter)

module.exports = router