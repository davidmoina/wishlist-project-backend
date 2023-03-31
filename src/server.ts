import express, { Request, Response } from "express"

import usersRouter from './routes/user.routes'

const app = express();

app.use("/user", usersRouter)

app.get("/", (_req: Request, res: Response) => {
  res.send("hello");
})

export default app