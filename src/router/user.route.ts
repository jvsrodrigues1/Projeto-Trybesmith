import { Router } from 'express';
import UserController from '../controllers/user.controllers';

const userController = new UserController();
const router = Router();

router.post('/', (req, res) => userController.create(req, res));

export default router;