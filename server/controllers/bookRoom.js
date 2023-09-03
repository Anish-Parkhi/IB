import bookingModel from '../models/roomBookingModel.js';
import roomdetailsModel from '../models/roomdetailsModel.js';

export const handleBooking = async (req, res) => {

    const roomDetails = await roomdetailsModel.findById(data.roomInfo);
    if (!roomDetails.isAvailable) {
        return res.status(400).json({ message: 'Room is not available' });
      }

  const data = req.body;
  const newBooking = new bookingModel(data);
  try {
    const response = await newBooking.save();

    await roomdetailsModel.findByIdAndUpdate(
      data.roomInfo,
      { isUnderBooking: true },
      { new: true }
    );
    res.status(201).json({ response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//fetch all bookings

export const fetchAllBookigs = async (req, res) => {
  try {
    const bookingsData = await bookingModel.find();
    res.status(200).json({ bookingsData });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
