const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation failed",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "FORBIDDEN",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "NOT FOUND",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "SERVER ERROR",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "UNAUTHORIZED",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    default:
      console.log("No error, all good");
      res.json({ message: "No error, all good" });
      break;
  }
};

module.exports = errorHandler;
