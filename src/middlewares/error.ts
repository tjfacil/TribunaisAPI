import { Request, Response, NextFunction } from 'express';

const errMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO log errors
  res.status(500).json({ error: true, message: err.message });
};

export default errMiddleware;