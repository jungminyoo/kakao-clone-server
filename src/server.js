import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(express.static("src/client"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_, res) => res.render("index"));
app.get("/*", (_, res) => res.send("404 Not Found"));

export default app;
