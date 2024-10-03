const express = require('express');
const router = express.Router();
const { createMessage } = require('../controllers/messageController.js');

router.post('/message', createMessage);

module.exports = router;
