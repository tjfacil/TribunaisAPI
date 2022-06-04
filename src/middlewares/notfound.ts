import { RequestHandler } from 'express';

const notFoundMiddleware: RequestHandler = (req, res, next) => {
  res.status(404).json({});
};

export default notFoundMiddleware;
