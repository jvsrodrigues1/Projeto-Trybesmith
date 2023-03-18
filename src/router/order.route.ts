import { Router } from 'express';
import OrderControllers from '../controllers/order.controllers';

const orderController = new OrderControllers();
const router = Router();

router.get('/', (req, res) => orderController.getAll(req, res));

export default router;