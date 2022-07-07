import { Router } from 'express';
import {
  getAllCourts,
  getCourtByAbbr,
  getCourtByCode,
  getCourtById,
  getCourtsSummary,
} from '../controllers/courts';
import {
  abbrValidators,
  codeValidators,
  idValidators,
  validateRequest,
} from '../middlewares/validators';

const router = Router();

router.get('/', getAllCourts);

router.get('/summary', getCourtsSummary);

router.get('/id/:id', idValidators, validateRequest, getCourtById);

router.get('/code/:code', codeValidators, validateRequest, getCourtByCode);

router.get('/abbr/:abbr', abbrValidators, validateRequest, getCourtByAbbr);

export default router;
