import { Router } from "express";
import listUserController from "../controllers/listUsers.controller";
import userCreateController from "../controllers/userCreate.controller";

const router = Router();

router.get("/users", listUserController);
router.post("/users", userCreateController);

export default router;
