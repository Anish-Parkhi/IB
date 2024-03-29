import mongoose from 'mongoose';

const bookRoomSchema = mongoose.Schema({
  userInfo: {
    fistName: String,
    lastName: String,
    contactNumber: Number,
    email: String,
  },
  roomName: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  numberOfGuests: {
    type: Number,
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['Paid', 'Unpaid'],
  },
  bookingStatus: {
    type: String,
    enum: ['Confirmed', 'Pending', 'Canceled'],
    default: 'Pending', 
  },
  bookingId: {
    type: String,
    required: true,
  },
});

const bookingModel = mongoose.model('bookingModel', bookRoomSchema);

export default bookingModel;
