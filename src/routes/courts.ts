import { Router } from 'express';
import {
  getAllCourts,
  getCourtByAbbr,
  getCourtById,
} from '../controllers/courts';

const router = Router();

router.get('/', getAllCourts);

router.get('/:id', getCourtById);

router.get('/:abbr', getCourtByAbbr);

export default router;
