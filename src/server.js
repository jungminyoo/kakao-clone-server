import express from "express";
import morgan from "morgan";
import { corsMiddleware } from "./middlewares";
import apiRouter from "./routers/apiRouter";
import session from "express-session";
import MongoStore from "connect-mongo";
import { swaggerUi, specs } from "./swagger";
import bodyParser from "body-parser";

const app = express();
const logger = morgan("dev");

app.use(logger);
//app.use(express.static("src/client"));
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(
//   session({
//     secret: process.env.COOKIE_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
//   })
// );

// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(specs, { explorer: true })
// );

app.get("/", (_, res) => res.send("test"));
app.use("/api", apiRouter);

app.get("/*", (_, res) => res.send("404 Not Found"));

export default app;
