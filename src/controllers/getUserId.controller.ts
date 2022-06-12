import { Request, Response } from "express";
import getUserIdService from "../services/user/getUserId.service";

const getUserIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userRetrive = await getUserIdService(id);
    return res.status(200).send(userRetrive);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        message: err.message,
        error: err.name,
      });
    }
  }
};

export default getUserIdController;
