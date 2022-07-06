import { Router } from 'express';
import {
  getAllServices,
  getServiceByInternalCode,
  getServicesByCourtCode,
  getServicesByRegionCode,
  getServicesSummary,
  getServicesSummaryByCourtCode,
} from '../controllers/services';
import {
  codeValidators,
  limitValidators,
  validateRequest,
} from '../middlewares/validators';

const router = Router();

router.get('/', limitValidators, validateRequest, getAllServices);

router.get('/summary', getServicesSummary);

router.get(
  '/court/:code',
  limitValidators,
  codeValidators,
  validateRequest,
  getServicesByCourtCode
);

router.get(
  '/region/:code',
  limitValidators,
  codeValidators,
  validateRequest,
  getServicesByRegionCode
);

router.get(
  '/internal/:code',
  codeValidators,
  validateRequest,
  getServiceByInternalCode
);

router.get(
  '/summary/court/:code',
  codeValidators,
  validateRequest,
  getServicesSummaryByCourtCode
);

export default router;
