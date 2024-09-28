const Joi = require('joi');
const { JoiErrors } = require('../utils/rules'); 

const ticketSchema = Joi.object({
  name: Joi.string().required().min(3).max(255).trim().error(new Error(JoiErrors.error.name)),
  contactNumber: Joi.string().required().pattern(/^[0-9]{10}$/).error(new Error(JoiErrors.error.contactNumber)), // Example pattern for 10-digit phone number
  membershipCategory: Joi.string().valid('Guest', 'Monthly', 'Yearly').required().trim().error(new Error(JoiErrors.error.membership)),
  amount: Joi.number().positive().required().error(new Error(JoiErrors.error.amount)), // Ensure amount is a positive number
});

const validateTicket = (data) => {
  return ticketSchema.validate(data);
};

module.exports =  {validateTicket} ;
