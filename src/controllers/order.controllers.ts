import { Request, Response } from 'express';
import OrdersServices from '../services/orders.services';

export default class OrderControllers {
  constructor(private orderService = new OrdersServices()) {}

  async getAll(_req: Request, res: Response):Promise<void> {
    const result = await this.orderService.getAll();
    res.status(200).json(result);
  }
}
