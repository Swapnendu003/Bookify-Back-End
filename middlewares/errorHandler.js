

const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Internal Server Error';

  if (err instanceof ErrorResponse) {
    statusCode = err.statusCode;
    message = err.message;
  }

  console.error('Error:', err);

  res.status(statusCode).json({ success: false, statusCode, msg: message });
};

module.exports = errorHandler;
