import mongoose from 'mongoose';

const roomdetailsSchema = mongoose.Schema({
  roomNumber: {
    type: Number,
  },
  occupancy: {
    type: Number,
  },
  amenities: [String],
  price: Number,
  availability: {
    startDate: Date,
    endDate: Date,
  },
  bookedDates: [Date],
  description: {
    type: String,
    maxlength: 100,
  },
  isUnderBooking: {
    type: Boolean,
    default: false,
  },
});

const roomdetailsModel = mongoose.model('roomdetailsModel', roomdetailsSchema);

export default roomdetailsModel;
