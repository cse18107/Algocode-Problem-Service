const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class InternalServerError extends BaseError {
  constructor(details) {
    super(
      "BadRequest",
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Something went wrong`,
      details
    );
  }
}

module.exports = BadRequest;
