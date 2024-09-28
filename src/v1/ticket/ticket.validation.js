const Joi = require('joi');
const Boom = require('@hapi/boom');
const {constant}=require('../utils/constants')

// Define the validation using Joi
const searchTicketsValidation = Joi.object({
    searchTerm: Joi.string().optional().allow(''), // searchTerm is optional
    page: Joi.number().integer().min(1).required().messages({
        'any.required': constant.validation.page.required,
        'number.base': constant.validation.page.base,
        'number.min': constant.validation.page.min,
    }),
    limit: Joi.number().integer().min(1).required().messages({
        'any.required': constant.validation.limit.required,
        'number.base': constant.validation.limit.base,
        'number.min': constant.validation.limit.min,
    })
});
module.exports={
    searchTicketsValidation,
}