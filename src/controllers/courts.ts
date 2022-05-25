import { RequestHandler } from 'express';
import { Court } from '../models/court';

export const getAllCourts: RequestHandler = async (req, res, next) => {
  const courts = await Court.find();

  res.status(200).json({ total: courts.length, courts: courts });
};

export const getCourtById: RequestHandler = async (req, res, next) => {
  const courtId = req.params.id;
  const court = await Court.find({ id: courtId });

  res.status(200).json({ court: court });
};

export const getCourtByAbbr: RequestHandler = async (req, res, next) => {
  const courtAbbr = req.params.abbr;
  const court = await Court.find({ abbr: courtAbbr });

  res.status(200).json({ court: court });
};
