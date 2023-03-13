import { Request, Response, Router } from "express";
import { createUser } from "../useCases/user/createUser/CreateUser";
import { getAllUsers } from "../useCases/user/getAll/GetAllUsers";

const router = Router();

router.post('/', (request: Request, response: Response) => {
    return createUser.create(request, response);
});

router.get('/', (request: Request, response: Response) => {
    return getAllUsers.getAllUsers(request, response);
});

export default router;