
const { createTicket } = require('./addticket.service');
const  {validateTicket}  = require('./addticket.validation');
const { constant } =require('../utils/constants');
const Boom=require('@hapi/boom');
const addNewTicket = async (req, res, next) => {
  try{
    const { error, value } = validateTicket(req.body); //Joi Validation
  
    if (error) {
      throw Boom.badRequest(error.message);
    }
    const userId = req.USER.id;
      const ticket = await createTicket({
        userId:userId,
        name: value.name,
        contactNumber: value.contactNumber, // Ensure this matches your database field
        membershipCategory: value.membershipCategory,
        amount: value.amount,
      });
  
      return res.status(201).json({
        success:true,
        message: constant.newTicketAdded
    });
   } catch (err) {
      next(err); // Pass the error to the error-handling middleware
    }
  };
  
  module.exports = { addNewTicket };
