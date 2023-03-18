import { Router } from 'express';
import ProductsController from '../controllers/products.controllers';

const productController = new ProductsController();
const router = Router();

router.post('/', (req, res) => productController.create(req, res));
router.get('/', (req, res) => productController.getAll(req, res));

export default router;