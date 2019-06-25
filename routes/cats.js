const express = require('express');
const router = express.Router();
const catsController = require('../Controllers/CatsController');

router.get('/', catsController.getProducts);

router.get('/:catName', catsController.getCatProduct);

module.exports = router;
