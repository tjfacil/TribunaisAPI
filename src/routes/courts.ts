import { Router } from 'express';
import { getAllCourts } from '../controllers/courts';

const router = Router();

router.get('/', getAllCourts);

export default router;
