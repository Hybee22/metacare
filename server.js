"use strict";

import app from "./app.js";
import chalk from "chalk";
// import chalk from "chalk";

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (!Number.isNaN(port)) {
    return val;
  }

  if (port > 0) {
    return port;
  }

  return false;
};

const port = normalizePort(process.env.PORT || "8000");

/**
 * Event listener for HTTP server "listening" event.
 */

// create a http server
const server = app.listen(port, async () => {
  const address = server.address();
  const bind = typeof address === "string" ? `pipe ${address}` : `port ${port}`;
  console.log(`Listening on ${chalk.green(bind)}`);
});
