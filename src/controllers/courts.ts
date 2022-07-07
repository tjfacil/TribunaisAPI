import { RequestHandler } from 'express';
import { Court } from '../models/court';
import { handleResponse } from '../lib/handle-response';

export const getAllCourts: RequestHandler = async (req, res, next) => {
  const courts = await Court.find();

  return handleResponse(res, courts, { total: courts.length, courts: courts });
};

export const getCourtsSummary: RequestHandler = async (req, res, next) => {
  const courts = await Court.find({}, { name: 1, abbr: 1, code: 1 });

  return handleResponse(res, courts, { total: courts.length, courts: courts });
};

export const getCourtById: RequestHandler = async (req, res, next) => {
  const courtId = req.params.id;
  const court = await Court.findById(courtId);

  return handleResponse(res, court, { court });
};

export const getCourtByCode: RequestHandler = async (req, res, next) => {
  const courtCode = req.params.code;
  const court = await Court.find({ code: courtCode });

  return handleResponse(res, court, { court });
};

export const getCourtByAbbr: RequestHandler = async (req, res, next) => {
  const courtAbbr = req.params.abbr.toUpperCase();
  const court = await Court.find({ abbr: courtAbbr });

  return handleResponse(res, court, { court });
};
