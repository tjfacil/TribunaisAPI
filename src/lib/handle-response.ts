import { Response } from 'express';

export const handleResponse = (res: Response, data: any, json: any) => {
  if (data === null || ('length' in data && data.length === 0)) {
    return res.status(404).json({});
  }
  return res.status(200).json(json);
};
