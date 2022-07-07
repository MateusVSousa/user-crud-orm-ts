import { Router } from "express";
import deleteUserController from "../controllers/deleteUser.controller";
import getUserIdController from "../controllers/getUserId.controller";
import listUserController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateuser.controllet";
import userCreateController from "../controllers/userCreate.controller";

const router = Router();

router.get("/users", listUserController);
router.post("/users", userCreateController);
router.get("/users/:id", getUserIdController);
router.delete("/users/:id", deleteUserController);
router.patch("users/:id",updateUserController);

export default router;
