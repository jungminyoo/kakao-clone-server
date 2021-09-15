import express from "express";
import "dotenv/config";
import morgan from "morgan";

const PORT = process.env.PORT;
const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(express.urlencoded({ extended: true }));

const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(PORT, handleListening);
