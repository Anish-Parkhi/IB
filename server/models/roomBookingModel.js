import mongoose from 'mongoose';

const bookRoomSchema = mongoose.Schema({
  userInfo: {
    fistName: String,
    lastName: String,
    city: String,
    contactNumber: Number,
  },
  roomInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'roomdetailsmodels',
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
});

const bookingModel = mongoose.model('bookingModel', bookRoomSchema);

export default bookingModel;
