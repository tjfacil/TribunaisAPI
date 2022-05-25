import { Router } from 'express';
import {
  getAllCourts,
  getCourtByAbbr,
  getCourtByCode,
  getCourtById,
} from '../controllers/courts';

const router = Router();

router.get('/', getAllCourts);

router.get('/id/:id', getCourtById);

router.get('/code/:code', getCourtByCode);

router.get('/abbr/:abbr', getCourtByAbbr);

export default router;
