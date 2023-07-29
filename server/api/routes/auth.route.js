import { Router } from 'express';
import { catchAsync } from '../utils/catchAsync.js';
import * as controller from '../controllers/auth.controller.js';

const router = Router();

router.get('/github/login', catchAsync(controller.redirectOauth));

export default router;
