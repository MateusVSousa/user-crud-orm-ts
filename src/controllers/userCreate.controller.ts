import { Request, Response } from "express";
import createUserService from "../services/user/createUser.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;
    const newUser = await createUserService({ name, email, password, age });
    const { id, createAt, updateAt } = newUser;
    return res.status(201).send({ id, name, email, age, createAt, updateAt });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        message: err.message,
        error: err.name,
      });
    }
  }
};

export default userCreateController;
