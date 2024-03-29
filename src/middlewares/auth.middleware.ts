import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import HTTPe from '../utilities/HTTP';

export default function authMiddleware(req: Request, _res: Response, next: NextFunction) {
  try {
    const { authorization: token } = req.headers;

    if (!token) {
      throw new HTTPe(401, 'Token não encontrado!');
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    req.body.user = decoded;

    next();
  } catch (err) {
    console.log(err);

    throw new HTTPe(401, 'Não autorizado!');
  }
}