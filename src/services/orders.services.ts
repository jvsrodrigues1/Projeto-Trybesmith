import IOrder from '../interfaces/order.interface';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

export default class OrdersServices {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  async getAll():Promise<IOrder[]> {
    return this.model.getAll();
  }
}