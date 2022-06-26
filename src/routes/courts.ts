import { Router } from 'express';
import {
  getAllCourts,
  getCourtByAbbr,
  getCourtByCode,
  getCourtById,
  getCourtsSummary
} from '../controllers/courts';
import {
  courtAbbrValidators,
  courtCodeValidators,
  courtIdValidators,
  validateRequest,
} from '../middlewares/validators';

const router = Router();

router.get('/', getAllCourts);

router.get('/summary', getCourtsSummary)

router.get('/id/:id', courtIdValidators, validateRequest, getCourtById);

router.get('/code/:code', courtCodeValidators, validateRequest, getCourtByCode);

router.get('/abbr/:abbr', courtAbbrValidators, validateRequest, getCourtByAbbr);

export default router;
