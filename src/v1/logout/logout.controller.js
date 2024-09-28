const { deleteSession } = require('./logout.services');
const Boom = require('@hapi/boom');
const { constant } = require('../utils/constants');
const { logoutValidation } = require('./logout.validation');
const redis = require('../../services/database/redis');
const jwt = require('jsonwebtoken');

const logout = async (req, res, next) => {
  try {
    const token = req.body;
    const userId = req.USER.id;
    const sessionKey = `session_${userId}`;
    const sessionExists = await redis.get(sessionKey);
    
    if (!sessionExists) {
      throw Boom.unauthorized(constant.error.sessionNotFound);
    }

    await deleteSession(sessionKey);
    res.json({ success: true, message: constant.success.logoutSuccess });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  logout,
};