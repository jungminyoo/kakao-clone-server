import express from "express";
import morgan from "morgan";
import { corsMiddelware } from "./middlewares";
import apiRouter from "./routers/apiRouter";

const app = express();
const logger = morgan("dev");

app.use(logger);
//app.use(express.static("src/client"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(corsMiddelware);

app.get("/", (_, res) => res.send("test"));

app.use("/api", apiRouter);

app.get("/*", (_, res) => res.send("404 Not Found"));

export default app;
