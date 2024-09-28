const db = require('../../services/database/mysql');
const Boom = require('@hapi/boom');
const { constant } = require('../utils/constants');

const checkTicketExists = async (ticketId) => {
  try {
    const [rows] = await db.query(
      'SELECT ticketId FROM ticketGeneratorTicket WHERE ticketId = ? AND isDelete = FALSE',
      [ticketId]
    );

    return rows.length > 0;
  } catch (error) {
    throw Boom.badImplementation(constant.error.checkTicketExists);
  }
};

const deleteTicketById = async (ticketId, userId) => {
  try {
    const ticketExists = await checkTicketExists(ticketId);
    if (!ticketExists) {
      throw Boom.notFound(constant.error.ticketNotFound);
    }
    const [result] = await db.query(
      'UPDATE ticketGeneratorTicket SET isDelete = TRUE WHERE ticketId = ? AND userId = ?',
      [ticketId, userId]
    );

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { deleteTicketById, checkTicketExists };