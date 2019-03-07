import { Router } from 'express';

import userRoutes from './user.route';

const router = Router();

router.get('/health-check', (req, res) => {
  res.send('OK! Lets go');
});

router.use('/user', userRoutes);

export default router;
