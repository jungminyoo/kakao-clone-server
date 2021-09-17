import mongoose from "mongoose";
import ioServer from "./index";
import { createAdapter } from "@socket.io/mongo-adapter";

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
const IOCONNECTION = "socket.io-adapter";

const handleOpen = async () => {
  console.log("Connected to DB!");
  try {
    await db.createCollection(IOCONNECTION, { capped: true, size: 1e6 });
  } catch (e) {
    console.log("Collection Already Exists");
  }
  const mongoCollection = db.collection(IOCONNECTION);
  ioServer.adapter(createAdapter(mongoCollection));
};
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
