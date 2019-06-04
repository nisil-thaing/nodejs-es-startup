import { Router } from 'express';

import { tryCatchAsyncHandler } from '@app/utils';
import { userCtrl, authCtrl } from '@app/controllers';

const router = Router();

router.route('/register')
  .post(tryCatchAsyncHandler(register), login);

async function register(req, _, next) {
  const user = await userCtrl.addNewUser(req.body);
  const userObj = user.toObject();
  delete userObj.hashedPassword;
  req.user = userObj;
  next();
}

function login(req, res) {
  const user = req.user;
  const token = authCtrl.generateToken(user);

  res.json({
    user,
    token
  });
}

export default router;