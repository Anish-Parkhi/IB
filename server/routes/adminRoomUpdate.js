import express from 'express';
import { updateRoomStatus } from '../controllers/updateRoomStatus.js';

const adminRoomUpdateRouter = express.Router();

adminRoomUpdateRouter.patch('/rooms/:roomNumber/bookedDates', updateRoomStatus);

export default adminRoomUpdateRouter;
