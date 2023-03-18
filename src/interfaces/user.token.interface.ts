import IUser from './user.interface';

export interface IUserToken extends IUser{
  id: number;
  username: string;
}