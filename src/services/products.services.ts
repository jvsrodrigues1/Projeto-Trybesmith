import Iproduct from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductsModel from '../models/products.model';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  async create(name:string, amount:string): Promise<Iproduct> {
    return this.model.create(name, amount);
  }

  async getAll():Promise<Iproduct[]> {
    return this.model.getAll();
  }
}