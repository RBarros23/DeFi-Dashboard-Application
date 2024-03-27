import { Router } from 'express';
import * as UserModel from '../models/users';
import { hashPassword } from '../utils/hashPassword'

const router = Router();

//Create a new user
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const passwordHash = await hashPassword(password);
    const newUser = await UserModel.createUser(email, passwordHash);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

//Get all users
router.get('/getAllUsers', async (req, res) => {

  try{
    const allUsers = await UserModel.getAllUsers();
    res.status(200).json(allUsers);
  } catch (error){
    res.status(500).json({ message: 'Error getting all users', error});
  }
})

//Get user by email
router.get('/getUserByEmail/:email', async (req, res) => {

  try{
    const { email } = req.params;

    const user = await UserModel.getUserByEmail(email);
    res.status(200).json(user);
  } catch (error){
    res.status(500).json({ message: 'Error getting user by email', error});
  }
})

//Get user by id
router.get('/getUserById/:id', async (req, res) => {

  try{
    const { id } = req.params;

    const user = await UserModel.getUserById(id);
    res.status(200).json(user);
  } catch (error){
    res.status(500).json({ message: 'Error getting user by id', error});
  }
})


export default router;
