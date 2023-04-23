import { Router } from "express";
import { getAllTasks, addTask, deleteTask, updateTask } from "../controllers/tasks.controller";
const taskRouter = Router();

taskRouter.get("/:userId", getAllTasks);
taskRouter.post("/", addTask);
taskRouter.delete("/:id", deleteTask);
taskRouter.put("/:id", updateTask);

export default taskRouter;