const express = require('express');
const { logout } = require('./logout.controller');
const { verifyToken } = require('../utils/verifytoken');

const router = express.Router();

router.post('/', verifyToken,logout);

module.exports = router;