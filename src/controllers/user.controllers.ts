import { Request, Response } from 'express';
import UsersService from '../services/user.services';
import createToken from '../utilities/JWT';

export default class UserController {
  constructor(private usersService = new UsersService()) {}

  async create(req:Request, res: Response):Promise<void> {
    const { username, vocation, level, password } = req.body;
    const newUser = await this.usersService.create(username, vocation, level, password);
    if (newUser) {
      const token = createToken(Number(newUser.id));
      res.status(201).json({ token });
    }
  }
}