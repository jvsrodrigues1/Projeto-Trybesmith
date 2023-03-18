import { NextFunction, Request, Response } from 'express';
import HTTPe from '../utilities/HTTP';

const httpErrorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { status, message } = err as HTTPe;
  res.status(status || 500).json({ message });
  next();
};

export default httpErrorMiddleware; 