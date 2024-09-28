const { deleteTicketById, checkTicketExists } = require('./deleteTicket.service');
const Boom = require('@hapi/boom');
const { constant } = require('../utils/constants');
const { deleteTicketValidation } = require('./deleteTicket.validation');

const deleteTicket = async (req, res, next) => {
  try {
    const { error } = deleteTicketValidation.validate(req.body);
    if (error) throw Boom.badRequest(error.details[0].message);

    const ticketId = req.body.ticketId;
    const userId = req.USER.id;

    const ticketExists = await checkTicketExists(ticketId);
    if (!ticketExists) {
      throw Boom.notFound(constant.error.ticketNotFound);
    }

    const result = await deleteTicketById(ticketId, userId);

    return res.status(200).json({
      success: true,
      message: constant.success.ticketDeleted,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { deleteTicket };