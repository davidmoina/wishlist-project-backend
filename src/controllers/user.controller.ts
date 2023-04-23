import { Request, Response } from "express"
import UserModel from "../models/user.model";

export const signUp = async(req: Request, res: Response) => {

  const { name, email, picture } = req.body

  try {
    const user = await UserModel.findOne({email});

    if(user) {
      res.status(200).send({msg: "User already exists", _id: user._id})
      return
    }

    const newUser = await UserModel.create({
      name,
      email,
      picture
    });
    res.status(201).send(newUser)

  } catch (error) {
    res.status(500).send({error: error})
  }
}

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
      const users = await UserModel.find({})
      res.status(200).send({ data: users })
  } catch (error) {
      res.status(500).send({ message: error })
  }
}