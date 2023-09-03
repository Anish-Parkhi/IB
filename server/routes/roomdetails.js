import express from 'express';
import { fetchAllRooms, uploadRoomDetails, getRoomByNumber } from '../controllers/fetchRooms.js';

const roomRouter = express.Router();

//fetch the rooms
roomRouter.get('/rooms', fetchAllRooms);


//fetch the room by its number
roomRouter.get('/rooms/:roomNumber', getRoomByNumber)

//add the rooms to the database
roomRouter.post('/rooms', uploadRoomDetails)

export default roomRouter;
