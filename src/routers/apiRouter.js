import express from "express";
import {
  getMe,
  getUser,
  getUsers,
  postRegister,
  postLogin,
} from "../controllers/userController";

const apiRouter = express.Router();

apiRouter.post("/user/register", postRegister);
apiRouter.post("/user/login", postLogin);
// apiRouter.get("/user/me", getMyInfo);

apiRouter.get("/users", getUsers);
apiRouter.get("/users/me", getMe);
apiRouter.get("/users/user", getUser);

export default apiRouter;
