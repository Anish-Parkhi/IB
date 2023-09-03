import roomdetailsModel from '../models/roomdetailsModel.js';

export const fetchAllRooms = async (req, res) => {
  try {
    const response = await roomdetailsModel.find();
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getRoomByNumber = async (req, res) => {
  const roomNumber = req.params;
  try {
    const room = await roomdetailsModel.findOne(roomNumber);
    if (!room) {
      res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json({ room });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const uploadRoomDetails = async (req, res) => {
  const data = req.body;
  const newRoom = new roomdetailsModel(data);
  try {
    const response = await newRoom.save();
    res.status(201).json({ response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
