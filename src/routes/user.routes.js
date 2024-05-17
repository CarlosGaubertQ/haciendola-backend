import { Router } from "express";
import { createUser, getUsers , updateUser, deleteUser, authenticateUsers} from "../controllers/user.controller.js";
const router = Router()

router.get('/user', getUsers)
router.post('/user', createUser)
router.put('/user/:user', updateUser)
router.delete('/user/:user',deleteUser )
router.post('/user/:user', authenticateUsers)

export default router