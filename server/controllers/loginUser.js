import bcrypt from 'bcrypt';
import userRegistrationModel from '../models/userRegistrationModel.js';

export const loginUser = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    console.log(emailId)
    console.log(password)
    const userModel = await userRegistrationModel.findOne({ emailId });
    if (!userModel) {
      return res.status(404).json({ message: 'User not found' });
    }
    const passwordMatch = await bcrypt.compare(password, userModel.password);
    if (!passwordMatch) {
      return res.status(404).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'User logged in successfully', userModel });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' });
  }
};
