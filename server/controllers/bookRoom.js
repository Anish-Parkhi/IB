import bookingModel from '../models/roomBookingModel.js';
import roomdetailsModel from '../models/roomdetailsModel.js';

export const handleBooking = async (req, res) => {

    // const roomDetails = await roomdetailsModel.findById(data.roomInfo);
    // if (!roomDetails.isAvailable) {
    //     return res.status(400).json({ message: 'Room is not available' });
    //   }

  const {
    userInfo,
    roomName,
    checkInDate,
    checkOutDate,
    numberOfGuests,
    bookingDate,
    totalPrice,
    paymentStatus,
    bookingStatus,
    bookingId
  } = req.body;


  //adding all the dates between the bookingDates array

  let bookingDates = [];

  const currentDate = new Date(checkInDate)
  const endDate = new Date(checkOutDate);

  while(currentDate < endDate) {
    bookingDates.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const newBooking = new bookingModel({
    userInfo,
      roomName,
      checkInDate,
      checkOutDate,
      numberOfGuests,
      totalPrice,
      bookingDate,
      paymentStatus: 'Unpaid',
      bookingStatus,
      bookingId
  });
  try {

    await newBooking.save();

    // await roomdetailsModel.findByIdAndUpdate(
    //   data.roomInfo,
    //   { isUnderBooking: true },
    //   { new: true }
    // );

    await roomdetailsModel.findOneAndUpdate(
      {roomName},
      { $push: { bookedDates: { $each: bookingDates } } },
    )

    res.status(201).json({ message: "booking created successfully", booking: newBooking });
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
