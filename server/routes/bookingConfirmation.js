import express from 'express';
import { bookingConfirm } from '../controllers/bookingConfirm.js';

const bookingConfirmationRouter = express.Router();

bookingConfirmationRouter.get('/bookingConfirmation', bookingConfirm);

export default bookingConfirmationRouter;
