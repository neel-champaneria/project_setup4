const buildDevLogger = require("./dev-logger");
const buildProdLogger = require("./prod-logger");
const { node_env } = require("../config/config");

let logger = null;

if (node_env === "development") {
  logger = buildDevLogger();
} else {
  logger = buildProdLogger();
}

module.exports = logger;
