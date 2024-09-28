// src/routes/ticketRoutes.js
const express = require('express');
const  {editTicketController}  = require('./editTicket.controller');
const { validateTicket } = require('./editTicket.validation');
const {verifyToken}=require('../utils/verifytoken');

const router = express.Router();

// Define the PUT route for editing a ticket
router.put('/', verifyToken,editTicketController);

module.exports = router;
