import { Request, Response } from "express";
import deleteUserService from "../services/user/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserService(id);
    return res.status(204).send();
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).send({
        message: err.message,
        error: err.name,
      });
    }
  }
};
export default deleteUserController;
