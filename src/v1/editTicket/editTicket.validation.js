// src/validations/ticketValidation.js
const Joi = require('joi');
const { JoiErrors } = require('../utils/rules');
const ticketSchema = Joi.object({ 
  ticketId: Joi.number().integer().required().error(new Error(JoiErrors.error.ticketId)), // Ensure ticketID is provided
  name: Joi.string().min(3).max(255).required().trim().error(new Error(JoiErrors.error.name)),
  contactNumber: Joi.string().pattern(/^[0-9]{10}$/).required().error(new Error(JoiErrors.error.contactNumber)), // Example pattern for 10-digit phone number
  membershipCategory: Joi.string().valid('Guest', 'Monthly', 'Yearly').required().error(new Error(JoiErrors.error.membership)),
  amount: Joi.number().positive().required().error(new Error(JoiErrors.error.amount)), 
});

const validateTicket = (data) => {
  return ticketSchema.validate(data);
};

module.exports = {validateTicket};
