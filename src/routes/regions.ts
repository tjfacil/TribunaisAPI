import { Router } from 'express';
import { getAllRegions } from '../controllers/regions';
import { codeValidators, validateRequest } from '../middlewares/validators';

const router = Router();

router.get('/', getAllRegions);

router.get(
  '/court/:code',
  codeValidators,
  validateRequest,
  getAllRegions
);

export default router;
