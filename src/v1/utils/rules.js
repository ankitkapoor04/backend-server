class JoiErrors {};
class ServerError {};

JoiErrors.error = {
  username: "Please provide a valid username between 3 and 30 characters",
  email: "Please provide a valid email address",
  password: "Password must be at least 8 characters long",
  contactNumber: "Please provide a valid contact number with exactly 10 digits",
  name:"Name is not allowed to be Empty",
  ticketId:"Please provide valid ticket Id",
  membership:"Please provide membership like ['Guest','Monthly','Yearly']",
  amount:"Please Add amount more than 0."
};

ServerError.error = {
  emailIdAlreadyInUse: "This email address is already in use",
  contactNumberAlreadyInUse: "This contact number is already in use",
};

module.exports = { JoiErrors, ServerError };
