import { ILogin } from '../interfaces/login.interface';
import LoginModel from '../models/login.model';
import UserService from './user.services';
import HTTPe from '../utilities/HTTP';

export default class LoginService {
  public loginModel = new LoginModel();

  public userService = new UserService();

  public async login(login: ILogin) {
    const newLogin = await this.loginModel.getByLogin(login);

    if (!newLogin) throw new HTTPe(401, 'Username or password invalid');
    const token = this.userService.generateToken(newLogin);

    return token;
  }
}