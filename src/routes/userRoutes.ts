import { Router } from 'express';
import * as UserModel from '../models/users';
import { hashPassword } from '../utils/hashPassword'

const router = Router();

router.post('/users', async (req, res) => {
  try {
    const { email, password } = req.body;

    const passwordHash = await hashPassword(password);
    const newUser = await UserModel.createUser(email, passwordHash);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

export default router;
