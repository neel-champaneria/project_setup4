const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  dev_log_level: process.env.DEV_LOG_LEVEL,
  prod_log_level: process.env.PROD_LOG_LEVEL,
};
