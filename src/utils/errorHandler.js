const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/base.error");
const logger = require("../config/logger.config");

function errorHandler(err, req, res, next) {
    if(err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {}
        })
    }

    logger.error(`Something went wrong`);
    
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Something went wrong',
      error: err,
      data: {},
    }); 
} 

module.exports = errorHandler;