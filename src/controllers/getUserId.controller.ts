import {Response, Request} from "express"
import getUserIdService from "../services/user/getUserId.service"

const getUserIdController = (req:Request,res:Response) => {
    try {
        const {id} = req.params
        const user = getUserIdService(id)
        return res.status(200).send({"User find": user})
    }catch(error){
        return res.status(400).send(error)

    }
}
