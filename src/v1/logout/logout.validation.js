const Joi = require('@hapi/joi');
const { constant } = require('../utils/constants');

const logoutValidation = Joi.object({
  session: Joi.string()
    .required().trim()
    .messages({
      'string.base': constant.validation.session.base,
      'string.empty': constant.validation.session.empty,
      'any.required': constant.validation.session.required,
    }),
});

module.exports = {
  logoutValidation,
};