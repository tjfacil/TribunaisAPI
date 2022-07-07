import { RequestHandler } from 'express';
import { handleResponse } from '../lib/handle-response';
import { getLimitAndSkip } from '../lib/pagination';
import { Service } from '../models/service';
import { ServiceSummary } from '../models/service-summary';

export const getAllServices: RequestHandler = async (req, res, next) => {
  const { limit, skip } = getLimitAndSkip(req);

  const services = await Service.find({}, {}, { skip, limit });
  const total = await Service.count();

  return handleResponse(res, services, { total, services });
};

export const getServicesByCourtCode: RequestHandler = async (
  req,
  res,
  next
) => {
  const { limit, skip } = getLimitAndSkip(req);
  const court = req.params.code;

  const services = await Service.find(
    { codTribunal: court },
    {},
    { skip, limit }
  );
  const total = await Service.count({ codTribunal: court });

  return handleResponse(res, services, { total, services });
};

export const getServicesByRegionCode: RequestHandler = async (
  req,
  res,
  next
) => {
  const { limit, skip } = getLimitAndSkip(req);
  const region = req.params.code;

  const services = await Service.find(
    { codComarca: region },
    {},
    { skip, limit }
  );
  const total = await Service.count({ codComarca: region });

  return handleResponse(res, services, { total, services });
};

export const getServiceByInternalCode: RequestHandler = async (
  req,
  res,
  next
) => {
  const serviceCode = req.params.code;
  const service = await Service.find({ codInterno: serviceCode });

  return handleResponse(res, service, { service });
};

export const getServicesSummary: RequestHandler = async (req, res, next) => {
  const summary = await ServiceSummary.find();

  return handleResponse(res, summary, {
    total: summary.length,
    summary: summary,
  });
};

export const getServicesSummaryByCourtCode: RequestHandler = async (
  req,
  res,
  next
) => {
  const court = req.params.code;
  const summary = await ServiceSummary.find({ codTribunal: court });

  return handleResponse(res, summary, {
    total: summary.length,
    summary: summary,
  });
};
