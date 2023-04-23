import express, { Request, Response } from "express"
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

import usersRouter from './routes/user.routes'
import taskRouter from "./routes/tasks.routes"

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/user", usersRouter);
app.use("/tasks", taskRouter);

app.get("/", (_req: Request, res: Response) => {
  res.send("hello");
})

export default app