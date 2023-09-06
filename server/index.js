// || Jai Babaji||
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import adminRoomUpdateRouter from './routes/adminRoomUpdate.js';
import roomBookingRouter from './routes/roomBooking.js';
import roomRouter from './routes/roomdetails.js';
import loginRouter from './routes/userLogin.js';
import router from './routes/userRegistration.js';
import bookingConfirmationRouter from './routes/bookingConfirmation.js'
const app = express();
const server = http.createServer(app);
app.use(bodyParser.json());
const io = new Server({
  cors: {
    origin: '*',
  },
});
export { io };

app.use(cors());
const PORT = process.env.PORT || 3001;

const CONNECTION_URL =
  'mongodb+srv://anishparkhi03:rFa7ysR1nRznNquV@cluster0.pce2rij.mongodb.net/?retryWrites=true&w=majority';

app.use('/api', router);
app.use('/api', roomRouter);
app.use('/api', adminRoomUpdateRouter);
app.use('/api', roomBookingRouter);
app.use('/api', loginRouter);
app.use('/api', bookingConfirmationRouter);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`App is listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
