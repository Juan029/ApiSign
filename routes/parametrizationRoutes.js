const express = require('express');
const router = express.Router();
const { createParametrization } = require('../controllers/parametrizationController.js');

router.post('/parametrization', createParametrization);

module.exports = router;
