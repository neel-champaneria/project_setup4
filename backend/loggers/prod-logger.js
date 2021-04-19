const { format, createLogger, transports } = require("winston");
const { timestamp, combine, errors, json } = format;

const { prod_log_level } = require("../config/config");

function buildProdLogger() {
  return createLogger({
    level: prod_log_level,
    format: combine(timestamp(), errors({ stack: true }), json()),
    transports: [new transports.Console()],
    exceptionHandlers: [new transports.Console()],
    exitOnError: false,
  });
}

module.exports = buildProdLogger;
