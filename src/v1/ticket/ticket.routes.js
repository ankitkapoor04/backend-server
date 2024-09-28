const express = require('express');
const { getTicketsByUserId } = require('./ticket.controller');
const { verifyToken } = require('../utils/verifytoken');

const router = express.Router();

router.get('/',verifyToken, getTicketsByUserId);

module.exports = router;
