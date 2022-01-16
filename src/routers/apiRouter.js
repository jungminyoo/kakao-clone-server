import express from "express";
import { getMe, getUser, getUsers } from "../controllers/userController";

const apiRouter = express.Router();

apiRouter.get("/users", getUsers);
apiRouter.get("/users/me", getMe);
apiRouter.get("/users/user", getUser);

export default apiRouter;
