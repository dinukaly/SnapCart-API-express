const express = require('express');

const authController = require('./auth.controller');
const authValidator = require('./auth.validator');
const { requireAuth } = require('./auth.middleware');
const { validateRequest } = require('../../shared/middleware/validateRequest');

const router = express.Router();

router.post('/register', validateRequest(authValidator.register), authController.register);
router.post('/login', validateRequest(authValidator.login), authController.login);
router.post('/refresh', validateRequest(authValidator.refresh), authController.refresh);
router.post('/logout', requireAuth(), authController.logout);
router.get('/me', requireAuth(), authController.me);

module.exports = router;
