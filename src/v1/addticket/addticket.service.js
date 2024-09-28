const db = require('../../services/database/mysql');
const {constant}=require('../utils/constants')
const Boom=require('@hapi/boom');
const createTicket = async (ticketData) => {
    const {userId, name, contactNumber, membershipCategory, amount } = ticketData;
    try{
    const [result] = await db.query(
      'INSERT INTO ticketGeneratorTicket (userId,name, contactNumber, membershipCategory, amount) VALUES (?, ?, ?, ?, ?)',
      [userId, name, contactNumber, membershipCategory, amount]
    );
    
    return {
      id: result.insertId,
      userId,
      name,
      contactNumber,
      membershipCategory,
      amount,
      createdAt: new Date(),
    };
  }
  catch (error) {
    throw Boom.badImplementation(error.message);
  }
  };
  
  module.exports = { createTicket };
