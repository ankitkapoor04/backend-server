const express = require('express');
const v1Routes = require('./v1/routes.v1'); // Import the v1 routes

const router = express.Router();

// Use version 1 routes
router.use('/v1', v1Routes);

module.exports = router;
