import jsonwebtoken from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';
import connection from '../models/connection';
import UsersModel from '../models/users.model';
import { IUserToken } from '../interfaces/user.token.interface';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  async create(username: string, vocation:string, level:number, password: string): Promise<IUser> {
    return this.model.create(username, vocation, level, password);
  }

  public jwt = jsonwebtoken;

  public generateToken(user: IUserToken) {
    const payload = {
      id: user.id,
      username: user.username,
    };
    return this.jwt.sign(
      payload, 
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' },
    );
  }
}
