import { Request, Response } from "express"
import TaskModel from "../models/task.model";

export const getAllTasks = async(req: Request, res: Response) => {

  const { userId } = req.params

  try {
    const tasks = await TaskModel.find({author: userId})
    res.status(200).send({ data: tasks })
} catch (error) {
    res.status(500).send({ message: error })
}
}

export const addTask = async(req: Request, res: Response) => {
  
  try {
    const task = await TaskModel.create(req.body);
    res.status(200).send({data: task})
  } catch (error) {
    res.status(500).send({error: error})
  }
}

export const deleteTask = async(req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await TaskModel.findByIdAndDelete(id);
    res.status(200).send({message: `Task ${id} deleted`})
  } catch (error) {
    res.status(500).send({error: error})
  }
}

export const updateTask = async(req: Request, res: Response) => {
  const id = req.params.id;
  const prop = req.body
  
  try {
    await TaskModel.findByIdAndUpdate(id, prop);
    res.status(200).send({message: `Task ${id}, ${Object.keys(prop)} modified`})
  } catch (error) {
    res.status(500).send({error: error})
  }
}
