import { RequestHandler } from 'express';
import { Court } from '../models/court';

export const getAllCourts: RequestHandler = async (req, res, next) => {
  const courts = await Court.find();

  res.status(200).json({total: courts.length, courts: courts})
};
