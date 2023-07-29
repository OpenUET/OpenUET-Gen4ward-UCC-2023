import { Router } from 'express';
import * as controller from '../controllers/auth.controller.js';
import { catchAsync } from '../utils/catchAsync.js';

const router = Router();

router.get('/github/login', catchAsync(controller.loginWithGithub));
router.post('/jwt/login', catchAsync(controller.loginWithJwt));

export default router;
