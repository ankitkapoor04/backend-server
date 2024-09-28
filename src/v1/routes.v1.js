const express = require('express');
const statusRoutes = require('./status/status.routes');
const addTicketRoutes = require('./addticket/addticket.route');
const editTicket = require('./editTicket/editTicket.routes');
const loginRoutes = require('./login/login.routes');
const logoutRoutes = require('./logout/logout.routes');
const signupRoutes = require('./signup/signup.routes');
const ticketRoutes = require('./ticket/ticket.routes');
const deleteTicketRoutes = require('./deleteTicket/deleteTicket.route');


const router = express.Router();

router.use('/status', statusRoutes);
router.use('/addTicket', addTicketRoutes);
router.use('/editTicket', editTicket);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/signup', signupRoutes);
router.use('/viewTicketsDetails',ticketRoutes);
router.use('/deleteTicket', deleteTicketRoutes);

module.exports = router;
