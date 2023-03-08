import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserById } from "../controller/userController";

const router = Router();

router.get("/", getAllUsers)
      .get("/:id", getUserById)
      .post("/", createUser)
      .delete("/:id", deleteUser);

export default router;