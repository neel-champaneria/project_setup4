const express = require("express");
const logger = require("./loggers/index-logger");

const app = express();

const { port } = require("./config/config");

app.get("/demo", (req, res) => {
  res.json({ str: "Server is Ready" });
  logger.info("path: /demo ");
});

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
