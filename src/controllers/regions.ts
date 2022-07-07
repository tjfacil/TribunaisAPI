import { RequestHandler } from 'express';
import { handleResponse } from '../lib/handle-response';
import { Region } from '../models/region';

export const getAllRegions: RequestHandler = async (req, res, next) => {
  const regions = await Region.find();

  return handleResponse(res, regions, {
    total: regions.length,
    regions: regions,
  });
};

export const getRegionByCourtCode: RequestHandler = async (req, res, next) => {
  const court = req.params.code;
  const regions = await Region.find({ codTribunal: court });

  return handleResponse(res, regions, { regions });
};
