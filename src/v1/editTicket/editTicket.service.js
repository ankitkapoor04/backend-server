// src/services/ticketService.js
const pool = require('../../services/database/mysql');
const Boom = require('@hapi/boom');
const { constant } = require('../utils/constants');
const isTicketId =async(ticketId)=>{
  try{
   const [result] = await pool.query('SELECT * FROM ticketGeneratorTicket WHERE ticketId = ?', [ticketId]);
   return result;
  }
   catch (error) {
   throw Boom.badImplementation(error.message);
 }
 }
async function editTicket({ticketId,userId,name,contactNumber,membershipCategory,amount}) {
  try {
  const fields = [];
  const values = [];
  
  if (name !== undefined) {
    fields.push('name = ?');
    values.push(name);
  }
  if (contactNumber !== undefined) {
    fields.push('contactNumber = ?');
    values.push(contactNumber);
  }
  if (membershipCategory !== undefined) {
    fields.push('membershipCategory = ?');
    values.push(membershipCategory);
  }
  if (amount !== undefined) {
    fields.push('amount = ?');
    values.push(amount);
  }
  values.push(ticketId,userId);
  if (fields.length === 0 || !ticketId) {
    throw Boom.badRequest(constant.noFieldProvided);
  }
  // Ensure ticketId is the last value for the WHERE clause
  const sql = `UPDATE ticketgeneratorticket SET ${fields.join(', ')} WHERE ticketId = ? AND userId = ?`;

   const [result] = await pool.execute(sql, values);
    return result;
  } catch (error) {
    throw Boom.badRequest(error.message);
  }
}

module.exports = {
  editTicket,
  isTicketId,
};
