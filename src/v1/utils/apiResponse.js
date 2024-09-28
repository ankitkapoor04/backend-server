
class JoiErrors { };
class ServerError { };
JoiErrors.error = {
    "email": "Please provide valid  email id",
    "password": "Please provide valid password",
    "contactNumber": "Please provide valid contact number"
};
ServerError.error = {
    "emailIdAlreadyInUse": "This emailId is already in use"
};
module.exports = { JoiErrors, ServerError };