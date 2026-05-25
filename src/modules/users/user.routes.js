const express = require('express');

const userController = require('./user.controller');
const { requireAuth } = require('../auth/auth.middleware');

const router = express.Router();

router.get('/me', requireAuth(), userController.getProfile);

module.exports = router;
