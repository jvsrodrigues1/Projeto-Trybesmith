import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll():Promise<IOrder[]> {
    const [result] = await this.connection.execute<(IOrder & RowDataPacket)[]>(
      `SELECT a.id, a.user_id as userId, JSON_ARRAYAGG(b.id) as productsIds FROM Trybesmith.orders a
      INNER JOIN Trybesmith.products b on (a.id = b.order_id) 
      GROUP BY a.id, a.user_id 
      ORDER BY a.id`);
    return result;
  }
}