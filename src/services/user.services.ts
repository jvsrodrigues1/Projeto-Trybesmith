import IUser from '../interfaces/user.interface';
import connection from '../models/connection';
import UsersModel from '../models/users.model';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  async create(username: string, vocation:string, level:number, password: string): Promise<IUser> {
    return this.model.create(username, vocation, level, password);
  }
}