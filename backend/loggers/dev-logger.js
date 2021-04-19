const { format, createLogger, transports } = require("winston");
const { timestamp, combine, printf, errors, prettyPrint } = format;

const { dev_log_level } = require("../config/config");

function buildDevLogger() {
  const logFormat = printf(({ level, message, timestamp, stack, meta }) => {
    return `${timestamp} ${level}: ${stack || message} ${meta}`;
  });

  return createLogger({
    level: dev_log_level,
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }),
      prettyPrint()
    ),
    transports: [new transports.Console()],
    exceptionHandlers: [new transports.Console()],
    exitOnError: false,
  });
}

module.exports = buildDevLogger;
