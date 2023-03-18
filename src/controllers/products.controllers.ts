import { Request, Response } from 'express';
import ProductsService from '../services/products.services';

export default class ProductsController {
  constructor(private productService = new ProductsService()) {}

  async create(req:Request, res: Response):Promise<void> {
    const { name, amount } = req.body;
    const result = await this.productService.create(name, amount);
    res.status(201).json(result);
  }

  async getAll(_req: Request, res: Response):Promise<void> {
    const result = await this.productService.getAll();
    res.status(200).json(result);
  }
}