const { Router } = require('express');
const userCtrl = require('../controllers/user.controller');
const authService = require('../services/auth.service');

const router = Router();

router.post('/signup', userCtrl.signUp);
router.post('/signin', authService.signInWithEmailAndPassword);
router.get('/auth-state', authService.checkAuthState);
router.get('/me', authService.protectRoute, userCtrl.getProfile);

module.exports = router;