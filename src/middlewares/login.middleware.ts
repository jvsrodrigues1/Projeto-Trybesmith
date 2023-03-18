import { Request, Response, NextFunction } from 'express';
import HTTPe from '../utilities/HTTP';

export default function loginError(req: Request, _res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (!username) throw new HTTPe(400, '"username" is required');
  if (!password) throw new HTTPe(400, '"password" is required');

  next();
} 