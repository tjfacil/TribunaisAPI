import { RequestHandler } from 'express';
import { Region } from '../models/region';

export const getAllRegions: RequestHandler = async (req, res, next) => {
  const regions = await Region.find();

  res.status(200).json({ total: regions.length, regions: regions });
};

export const getRegionByCourtCode: RequestHandler = async (req, res, next) => {
  const court = req.params.code;
  const regions = await Region.find({ codTribunal: court });

  res.status(200).json({ total: regions.length, regions: regions });
};
