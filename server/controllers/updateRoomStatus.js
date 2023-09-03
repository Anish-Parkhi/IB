export const updateRoomStatus = async (req, res) => {
  const roomNumber = req.paramas;
  const changeAvalibalityOnDate = new Date(req.body.newDate);
  try {
    // const room = await roomdetailsModel.findOne({ roomNumber });
    res.send(roomNumber);
    // room.bookedDates.push(changeAvalibalityOnDate);
    // await room.save();
    // res.status(200).json({ room });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
