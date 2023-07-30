import { Router } from 'express';
import * as controller from '../controllers/post.controller.js';
import { catchAsync } from '../utils/catchAsync.js';

const router = Router();

router.get('/', catchAsync(controller.getAllPosts));

router.get('/:id', catchAsync(controller.getPostById));

router.post('/', catchAsync(controller.createPost));

router.patch('/:id', catchAsync(controller.updatePostById));
router.patch('/:id/star', catchAsync(controller.starPostById));

router.delete('/:id', catchAsync(controller.deletePostById));

export default router;
