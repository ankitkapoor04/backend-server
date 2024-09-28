const Boom = require('@hapi/boom');
const { getPaginatedTicketsByUserId } = require('./ticket.services');
const { constant } = require('../utils/constants');
const { searchTicketsValidation }=require('./ticket.validation')

const getTicketsByUserId = async (req, res, next) => {
    try {
        const userId = req.USER.id;
        const page = parseInt(req.query.page, 10) || 1;  // Default to page 1 if not provided
        const limit = parseInt(req.query.limit, 10) || 10; // Default to limit 10 if not provided
        const searchTerm=req.query.searchTerm || ''; //searchTerm get from the query.
        const {error}= searchTicketsValidation.validate(req.query);
        if(error){
            throw Boom.badRequest(error.details[0].message);
        }
        // Fetch paginated tickets with search term and pagination metadata
        const { tickets, totalItems } = await getPaginatedTicketsByUserId(userId, page, limit,searchTerm);

        if (!tickets || tickets.length === 0) {
            throw Boom.notFound(constant.error.noTicketsFound);
        }

        const totalPages = Math.ceil(totalItems / limit);

        res.json({
            success: true,
            message: constant.ticketsFetched, tickets,
            pagination: {
                currentPage: page,
                totalPages,
                totalItems,
                itemsPerPage: limit
            }
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getTicketsByUserId,
};
