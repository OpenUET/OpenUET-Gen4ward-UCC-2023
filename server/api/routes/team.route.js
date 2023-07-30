import { Router } from 'express';
import * as controller from '../controllers/team.controller.js';
import { catchAsync } from '../utils/catchAsync.js';

const router = Router();

router.post('/invite/response/:id', catchAsync(controller.responseToInvitation));
router.post('/invite/:id', catchAsync(controller.inviteUser));

router.post('/request-joining/response/:id', catchAsync(controller.responseToJoiningRequest));
router.post('/request-joining/:id', catchAsync(controller.requestToJoin));

router.get('/:id', catchAsync(controller.getTeamByPostId));

router.get('/', catchAsync(controller.getAllTeams));

export default router;
