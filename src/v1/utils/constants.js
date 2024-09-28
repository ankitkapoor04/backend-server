module.exports.constant = {
  validation: {
    emailOrUsername: {
      base: 'The email or username should be a string.',
      empty: 'The email or username cannot be empty.',
      required: 'The email or username is required.',
    },
    password: {
      base: 'The password should be a string.',
      empty: 'The password cannot be empty.',
      min: 'The password must be at least 8 characters long.',
      required: 'The password is required.',
    },
    session: {
      base: 'Session token must be a string.',
      empty: 'Session token cannot be empty.',
      required: 'Session token is required.',
    },
    ticketId: {
      base: 'The ticket ID should be a number.',
      integer: 'The ticket ID should be an integer.',
      positive: 'The ticket ID should be a positive number.',
      required: 'The ticket ID is required.',
    },
    page:{
      base:'Page must be a number.',
      required:'Page is required.',
      min:'Page must be greater than or equal to 1.',
    },
    limit:{
        required: 'Limit is required.',
        base: 'Limit must be a number.',
        min: 'Limit must be greater than or equal to 1.',
    },
  },
  success: {
    authenticationSuccess: 'Login successful.',
    dashboardDataRetrieved: 'Dashboard data retrieved successfully.',
    tokenValid: 'Token is valid and user is authenticated.',
    logoutSuccess: 'Logout successful.',
    ticketsFetched: 'Tickets fetched successfully',
    ticketDeleted: 'Ticket successfully deleted.',
  },
  error: {
    ticketNotFound: 'Ticket not found or already deleted.',
    checkTicketExists: 'Error checking ticket existence.',
    deleteTicketError: 'Error deleting ticket.',
    sessionNotFound: 'Session not found.',
    sessionDeletionFailed: 'Failed to delete session.',
    noTokenProvided: 'No token provided.',
    invalidTokenFormat: 'Invalid token format.',
    sessionExpiredOrUnauthorized: 'Session expired login again.',
    invalidSessionToken: 'Invalid session token.',
    failedToAuthenticateToken: 'Failed to authenticate token.',
    dbQueryFailed: 'Database query failed.',
    passwordComparisonFailed: 'Password comparison failed.',

    noTicketsFound: 'No tickets found for this user',
    userNotFound: "User Not exists",
    noFieldProvided: 'No fields provided for update or TicketId missing',
    ticketNotFound: `Ticket details is not exists `,

    ticketNotFound: 'Ticket not found.',
    invalidCredentials: 'Invalid credentials.',
  },

  // Success Messages

  ticketUpdate: "Ticket updated successfully",

  newTicketAdded: "New Ticket Added successfully",

  registrationSuccess: "Registration successful",
  ticketsFetched: 'Tickets fetched successfully',

  // Joi Validation Error Messages
  invalidUsername: "Please provide a valid username between 3 and 30 characters",
  invalidEmail: "Please provide a valid email address",
  invalidPassword: "Password must be at least 8 characters long",
  invalidContactNumber: "Please provide a valid contact number with exactly 10 digits",
  isticketId: "Please provide ticketId ",
  isName: "Please add Name",


  // Server Error Messages
  emailIdAlreadyInUse: "This email address is already in use",
  registrationFailed: "Failed to register user",
  contactNumberAlreadyInUse: "This contact number is already in use",

  noTicketsFound: 'No tickets found for this user',
};

