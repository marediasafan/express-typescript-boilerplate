import app from "./app";
import errorHandler from "errorhandler";

/**
 * Error Handler for dev
 */
if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
}

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );

  console.log("  Press CTRL-C to stop\n");
});

export default server;