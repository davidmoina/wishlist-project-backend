import { Router } from "express";
import signUp from '../controllers/user.controller'
const userRouter = Router();

userRouter.get("/signup", signUp);

export default userRouter;