import { Router } from 'express';
import { getAllRegions, getRegionByCourtCode } from '../controllers/regions';
import { codeValidators, validateRequest } from '../middlewares/validators';

const router = Router();

router.get('/', getAllRegions);

router.get(
  '/court/:code',
  codeValidators,
  validateRequest,
  getRegionByCourtCode
);

export default router;
