import { Request, Response } from "express"
import UserModel from "../models/user.model"

const signUp = async(req: Request, res: Response) => {

  try {
    await UserModel.create(req.body);
    res.status(200).send({message: "Sing up"})
  } catch (error) {
    res
  }
}

export default signUp;