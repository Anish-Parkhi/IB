import roomBookingModel from '../models/roomBookingModel.js';

export const bookingConfirm = async (req, res) => {
  const bookingId = req.query.bookingId;
  try {
    const response = await roomBookingModel.find({ bookingId: bookingId });
    res.status(200).json({ response });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
