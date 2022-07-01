import { Router } from 'express';
import {
  getAllServices,
  getServiceByCode,
  getServicesByCourtCode,
  getServicesByRegionCode,
  getServicesSummary,
  getServicesSummaryByCourtCode,
} from '../controllers/services';

const router = Router();

router.get('/', getAllServices);

router.get('/:court', getServicesByCourtCode);

router.get('/:region', getServicesByRegionCode);

router.get('/:code', getServiceByCode);

router.get('/summary', getServicesSummary);

router.get('/summary/:court', getServicesSummaryByCourtCode);

export default router;
