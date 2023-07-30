import { Router } from 'express';
import * as controller from '../controllers/user.controller.js';
import { catchAsync } from '../utils/catchAsync.js';

const router = Router();

router.get('/', catchAsync(controller.getAllUsers));

router.get('/:id', catchAsync(controller.getUserById));

export default router;
