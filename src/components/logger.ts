import winston from "winston";

const level: string = process.env.NODE_ENV === "production" ? "error" : "debug";
const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      level: level
    }),
    new winston.transports.File({ filename: "debug.log", level: "debug" })
  ]
};

const logger = winston.createLogger(options);

export default logger;
