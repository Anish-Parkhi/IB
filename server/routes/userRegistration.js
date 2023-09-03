import express from 'express';
import { getUser } from '../controllers/getUser.js';
import { addNewUser } from '../controllers/registerUser.js';

const router = express.Router();

// register the user
router.post('/user', addNewUser);

//fetch the user
router.get('/user/:id', getUser);
export default router;
