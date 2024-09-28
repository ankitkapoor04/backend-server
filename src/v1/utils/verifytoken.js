const jwt = require('jsonwebtoken');
const redisClient = require('../../services/database/redis');
const Boom = require('@hapi/boom');
const { constant } = require('../utils/constants');

const secretKey = process.env.SECRET_KEY;
const redisExpireTimeWeb = 604800;

async function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers['token'];

    if (!authHeader) {
      return next(Boom.unauthorized(constant.error.noTokenProvided));
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return next(Boom.unauthorized(constant.error.invalidTokenFormat));
    }

    const isVerified = await jwt.verify(token, secretKey);
    const cachedToken = await redisClient.get(`session_${isVerified.id}`);

    if (!cachedToken) {
      return next(Boom.unauthorized(constant.error.sessionExpiredOrUnauthorized));
    }

    if (cachedToken === token) {
      await redisClient.expire(`session_${isVerified.id}`, redisExpireTimeWeb);
      req.USER = isVerified;
      return next();

    } else {
      return next(Boom.unauthorized(constant.error.sessionExpiredOrUnauthorized));
    }
  } catch (err) {
    return next(Boom.unauthorized(constant.error.failedToAuthenticateToken));
  }
}

module.exports = {
  verifyToken,
};
