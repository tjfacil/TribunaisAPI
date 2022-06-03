import { Router } from 'express';
import { param } from 'express-validator';
import {
  getAllCourts,
  getCourtByAbbr,
  getCourtByCode,
  getCourtById,
} from '../controllers/courts';

const router = Router();

router.get('/', getAllCourts);

router.get('/id/:id', getCourtById);

router.get(
  '/code/:code',
  [param('code').trim().escape().isNumeric()],
  getCourtByCode
);

router.get(
  '/abbr/:abbr',
  [param('abbr').not().isEmpty().trim().escape().isAlpha()],
  getCourtByAbbr
);

export default router;
