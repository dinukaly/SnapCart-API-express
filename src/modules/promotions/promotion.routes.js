const express = require('express');

const promotionController = require('./promotion.controller');

const router = express.Router();

router.get('/', promotionController.listPromotions);

module.exports = router;
