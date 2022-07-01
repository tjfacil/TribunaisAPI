import { Router } from 'express';
import {
  getAllServices,
  getServiceByInternalCode,
  getServicesByCourtCode,
  getServicesByRegionCode,
  getServicesSummary,
  getServicesSummaryByCourtCode,
} from '../controllers/services';
import { codeValidators, validateRequest } from '../middlewares/validators';

const router = Router();

router.get('/', getAllServices);

router.get('/summary', getServicesSummary);

router.get(
  '/court/:code',
  codeValidators,
  validateRequest,
  getServicesByCourtCode
);

router.get(
  '/region/:code',
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
