import { Router } from 'express';
import * as UserModel from '../models/users';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Router();

//Create login
router.post('/', async (req, res) => {
  const user = await UserModel.getUserByEmail(req.body.email);

  if (user == null) {
    return res.status(400).send('Cannot find user');
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password_hash)) {
      const accessToken = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!);

      res.json({ accessToken });
    } else {
      res.send('Not Allowed');
    }
  } catch (error) {
    res.status(500).send();
  }
});

export default router;