import express from "express";
import "dotenv/config";
import morgan from "morgan";
import { Server } from "socket.io";
import http from "http";
import { instrument } from "@socket.io/admin-ui";

const PORT = process.env.PORT;
const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => res.send("Home"));
app.get("/*", (_, res) => res.send("404 Not Found"));

const handleListening = () => console.log(`Server listening on port ${PORT}`);

const httpServer = http.createServer(app);
const ioServer = new Server(httpServer, {
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true,
  },
});

instrument(ioServer, {
  auth: false,
});

ioServer.on("connection", (socket) => {});

httpServer.listen(PORT, handleListening);
