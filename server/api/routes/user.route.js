import { Router } from 'express';
import * as controller from '../controllers/user.controller.js';
import { catchAsync } from '../utils/catchAsync.js';

const router = Router();

router.get('/:id', catchAsync(controller.getUserById));
router.get('/', catchAsync(controller.getAllUsers));


export default router;
