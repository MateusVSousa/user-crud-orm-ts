import {Request, Response } from "express"
import { AppDataSource } from "../data-source"
import {User} from "../entity"
import deleteUserService from "../services/user/deleteUser.service"


const deleteUserController = (req:Request, res:Response) => {
    try{
        const {id} = req.params
        const userDeleted = deleteUserService(id)
        return res.status(204)

    } catch (error){
        return res.status(400).send({"error": error})
    }
    
}