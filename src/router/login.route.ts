import { Router } from 'express';
import LoginController from '../controllers/login.controllers';
import loginError from '../middlewares/login.middleware';

const router = Router();

const loginController = new LoginController();

router.post('/', loginError, loginController.login);

export default router;