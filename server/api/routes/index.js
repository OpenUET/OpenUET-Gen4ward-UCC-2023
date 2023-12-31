import { Router } from 'express';
import authRouter from './auth.route.js';
import postRouter from './post.route.js';
import teamRouter from './team.route.js';
import userRouter from './user.route.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/posts', postRouter);
router.use('/teams', teamRouter);
router.use('/users', userRouter);

export default router;
