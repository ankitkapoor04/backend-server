// routes/ticketRoutes.js
const express = require('express');
const {addNewTicket}  = require('./addticket.controller');
const  {verifyToken}=require('../utils/verifytoken');

const router = express.Router();

router.post('/', verifyToken, addNewTicket);//made a change here add the authenticate,

module.exports = router;
