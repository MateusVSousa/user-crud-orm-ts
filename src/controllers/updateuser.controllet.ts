import { Request, Response } from "express";
import updateUserService from "../services/user/updateUser.service";

const updateUserController = async (req:Request, res:Response) => {
    try{
        // const {id} = req.params
        // const {name,email, password, age} = req.body
        // const userUpdated = await updateUserService(id, {name,email,password, age})
        // return res.status(200).json({...userUpdated})
        return res.status(200).json({message:"Teste 12"})
    }catch(err){
        return res.status(400).send({
        message: err.message,
        error: err.name,
      });
    }
}

export default updateUserController