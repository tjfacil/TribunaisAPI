import { RequestHandler } from 'express';
import { Service } from '../models/service';
import { ServiceSummary } from '../models/service-summary';

export const getAllServices: RequestHandler = async (req, res, next) => {
  const services = await Service.find();

  res.status(200).json({ total: services.length, services: services });
};

export const getServicesByCourtCode: RequestHandler = async (
  req,
  res,
  next
) => {
  const court = req.params.code;
  const services = await Service.find({ codTribunal: court });

  res.status(200).json({ total: services.length, services: services });
};

export const getServicesByRegionCode: RequestHandler = async (
  req,
  res,
  next
) => {
  const region = req.params.code;
  const services = await Service.find({ codComarca: region });

  res.status(200).json({ total: services.length, services: services });
};

export const getServiceByInternalCode: RequestHandler = async (
  req,
  res,
  next
) => {
  const serviceCode = req.params.code;
  const service = await Service.find({ codInterno: serviceCode });

  res.status(200).json({ service: service });
};

export const getServicesSummary: RequestHandler = async (req, res, next) => {
  const summary = await ServiceSummary.find();

  res.status(200).json({ total: summary.length, summary: summary });
};

export const getServicesSummaryByCourtCode: RequestHandler = async (
  req,
  res,
  next
) => {
  const court = req.params.code;
  const summary = await ServiceSummary.find({ codTribunal: court });

  res.status(200).json({ total: summary.length, summary: summary });
};
