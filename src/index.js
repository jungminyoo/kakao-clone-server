import "dotenv/config";
import { Server } from "socket.io";
import http from "http";
import { instrument } from "@socket.io/admin-ui";
//import "./db";
import app from "./server";

const PORT = process.env.PORT;

const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(PORT, handleListening);
// const httpServer = http.createServer(app);
// export const ioServer = new Server(httpServer, {
//   cors: {
//     origin: ["https://admin.socket.io"],
//     credentials: true,
//   },
// });

// instrument(ioServer, {
//   auth: false,
// });

// ioServer.on("connection", (socket) => {
//   socket.on("test", (text, done) => {
//     console.log(text);
//     done(text);
//   });
// });

// httpServer.listen(PORT, handleListening);
