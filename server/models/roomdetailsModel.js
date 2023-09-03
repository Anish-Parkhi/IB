import mongoose from 'mongoose';

const roomdetailsSchema = mongoose.Schema({
  roomName: {
    type: String,
  },
  occupancy: {
    type: Number,
  },
  bedInfo: {
    bedType: String,
    bedCount: Number, 
  },
  price: Number,
  rules: [String],
  availability: {
    startDate: Date,
    endDate: Date,
  },
  bookedDates: [Date],
  description: {
    type: String,
  },
  isUnderBooking: {
    type: Boolean,
    default: false,
  },
});

const roomdetailsModel = mongoose.model('roomdetailsModel', roomdetailsSchema);

export default roomdetailsModel;
