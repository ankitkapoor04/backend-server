// src/controllers/ticketController.js
const { editTicket ,isTicketId} = require('./editTicket.service');
const {validateTicket} = require('./editTicket.validation');
const {constant}=require('../utils/constants');
const Boom=require('@hapi/boom');
async function editTicketController(req, res,next) {
  try {
  const userId = req.USER.id;
  // Validate the incoming data
  const { error } = validateTicket(req.body);
  if (error) {
    return next(Boom.badRequest(error.message));
  }

  const {ticketId,name,contactNumber,membershipCategory,amount} = req.body;
  const isTicketIdExists = await isTicketId(ticketId);
    if (isTicketIdExists.length<=0) {
      throw Boom.notFound(constant.ticketNotFound); 
    }
    const result = await editTicket({ticketId,userId,name,contactNumber,membershipCategory,amount});
    res.status(200).json({
      success: true, message: constant.ticketUpdate
    });
   }catch (err) {
    next(err);
  }
}

module.exports = {
  editTicketController
};
