const redis = require('../../services/database/redis');
const Boom = require('@hapi/boom');
const { constant } = require('../utils/constants');

const deleteSession = async (sessionKey) => {
  try {
    await redis.del(sessionKey);
  } catch (err) {
    throw Boom.badImplementation(constant.error.sessionDeletionFailed);
  }
};

module.exports = {
  deleteSession,
};