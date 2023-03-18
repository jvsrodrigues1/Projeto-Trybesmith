import { RowDataPacket } from 'mysql2';
import Iproduct from '../interfaces/product.interface';
import connection from './connection';

export default async (): Promise<Iproduct[]> => {
  const [data] = await connection.execute<Iproduct[] & RowDataPacket[]>(`
  SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds FROM Trybesmith.orders o
  INNER JOIN Trybesmith.products p ON o.id = p.order_id
  GROUP BY o.user_id, o.id;
  `);
  return data;
};