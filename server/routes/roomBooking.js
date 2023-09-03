import express from 'express';
import { handleBooking, fetchAllBookigs } from '../controllers/bookRoom.js';

const roomBookingRouter = express.Router();

roomBookingRouter.post('/bookings', handleBooking);
roomBookingRouter.get('/bookings', fetchAllBookigs);
export default roomBookingRouter;
