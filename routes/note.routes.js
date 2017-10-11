const { Router } = require('express');
const noteCtrl = require('../controllers/note.controller');
const authService = require('../services/auth.service');

const router = Router();

router.post('/', authService.protectRoute, noteCtrl.addNote);
router.get('/', authService.protectRoute, noteCtrl.getList);
router.put('/:id', authService.protectRoute, noteCtrl.updateNote);

module.exports = router;