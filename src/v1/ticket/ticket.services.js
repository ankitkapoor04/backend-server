const pool = require('../../services/database/mysql');
const Boom = require('@hapi/boom');

const getPaginatedTicketsByUserId = async (userId, page, limit,searchTerm) => {
    const offset = (page - 1) * limit;
    const search = `%${searchTerm}%`;
    
    try {
        // Query to get tickets with pagination, ordered by createdAt in descending order
        const [tickets] = await pool.query(
            `SELECT * FROM ticketGeneratorTicket 
            WHERE userId = ? AND isDelete = 0 
            AND (name LIKE ? OR contactNumber LIKE ? OR pin LIKE ?) 
            ORDER BY createdAt DESC 
            LIMIT ? OFFSET ?`,
            [userId, search,search,search,parseInt(limit), parseInt(offset)]
        );

        // Query to count total tickets
        const [[{ totalItems }]] = await pool.query(
            `SELECT COUNT(*) AS totalItems 
            FROM ticketGeneratorTicket 
            WHERE userId = ? AND isDelete = 0 
            AND (name LIKE ? OR contactNumber LIKE ? OR pin LIKE ?)`,
            [userId, search, search ,search]
        );

        return { tickets, totalItems,currentPage: page, totalPages: Math.ceil(totalItems / limit) };
    } catch (err) {
        throw Boom.badImplementation('Failed to fetch tickets');
    }
};


module.exports = {
    getPaginatedTicketsByUserId,
};
