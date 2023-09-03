import userRegistrationModel from '../models/userRegistrationModel.js';

export const getUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const response = await userRegistrationModel.findById(userId);
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
