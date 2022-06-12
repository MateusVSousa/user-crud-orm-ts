import {Request, Response } from "express"
import { AppDataSource } from "../data-source"
import {User} from "../entity"
const deleteUserController = (req:Request, res:Response) => {
    const userRepository = AppDataSource.getRepository(User)
    
    return ""
}