import { Request } from 'express';

export const getLimitAndSkip = (req: Request) => {
  const limit = getRequestLimit(req);
  const skip = getRequestSkip(req);
  return { limit, skip };
};

export const getRequestLimit = (req: Request) => {
  let limit = req.query.limit;
  if (limit === undefined || +limit > 100 || +limit < 1) {
    limit = '10';
  }
  return +limit;
};

export const getRequestSkip = (req: Request) => {
  let skip = req.query.skip;
  if (skip === undefined) {
    skip = '0';
  }
  return +skip;
};
