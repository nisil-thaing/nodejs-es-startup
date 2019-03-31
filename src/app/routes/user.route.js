import { Router } from 'express';

import { tryCatchAsyncHandler } from '@app/utils';
import { userCtrl } from '@app/controllers';

const router = Router();

router.route('/')
  .get((req, res) => res.json({ content: 'something' }))
  .post(tryCatchAsyncHandler(addNewUser));

async function addNewUser(req, res) {
  const user = await userCtrl.addNewUser(req.body);
  res.json(user);
}

export default router;