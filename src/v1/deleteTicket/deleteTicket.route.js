const express = require('express');
const { deleteTicket } = require('./deleteTicket.controller');
const { verifyToken } = require('../utils/verifytoken');

const router = express.Router();

router.put('/', verifyToken, deleteTicket);

module.exports = router;