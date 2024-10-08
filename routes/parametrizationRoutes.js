const express = require('express');
const router = express.Router();
const { createOrUpdateParametrization } = require('../controllers/parametrizationController.js');

router.post('/parametrization', createOrUpdateParametrization);

module.exports = router;