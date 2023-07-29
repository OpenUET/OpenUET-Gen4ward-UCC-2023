import { Router } from 'express';

const router = Router();

router.use('/auth', (req, res) => res.send('auth'));

export default router;