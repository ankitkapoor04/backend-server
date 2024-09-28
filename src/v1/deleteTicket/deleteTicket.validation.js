const Joi = require('@hapi/joi');
const { constant } = require('../utils/constants');

const deleteTicketValidation = Joi.object({
    ticketId: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            'number.base': constant.validation.ticketId.base,
            'number.integer': constant.validation.ticketId.integer,
            'number.positive': constant.validation.ticketId.positive,
            'any.required': constant.validation.ticketId.required,
        }),
});

module.exports = {
    deleteTicketValidation,
};