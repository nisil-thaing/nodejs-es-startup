import { Router } from 'express';
import passport from 'passport';

import { tryCatchAsyncHandler } from '@app/utils';
import { userCtrl } from '@app/controllers';

const router = Router();
router.use(passport.authenticate('jwt', { session: false }));

router.route('/')
  .post(tryCatchAsyncHandler(addNewUser));

async function addNewUser(req, res) {
  const user = await userCtrl.addNewUser(req.body);
  res.json(user);
}

export default router;