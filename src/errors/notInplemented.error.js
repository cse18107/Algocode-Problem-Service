const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotImplemented extends BaseError {
  constructor(methodName) {
    super(
      "NotImplemented",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} Not Implemented`,
      {}
    );
  }
}

module.exports = NotImplemented;
