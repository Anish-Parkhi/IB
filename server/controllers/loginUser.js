import bcrypt from 'bcrypt';
import userRegistrationModel from '../models/userRegistrationModel.js';

export const loginUser = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await userRegistrationModel.findOne({ emailId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
      return res.status(404).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'User logged in successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
