import multer from 'multer';
import userRegistrationModel from '../models/userRegistrationModel.js';
import bcrypt from 'bcrypt';

const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single('governmentIdImage');

export const addNewUser = async (req, res) => {

  const {password} = req.body;

  const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    } else {
      try {
        const newUser = new userRegistrationModel({
          name: req.body.name,
          phoneNumber: req.body.phoneNumber,
          emailId: req.body.emailId,
          designation: req.body.designation,
          passwordHash: passwordHash,
          // Imgname: req.body.name,
          // govIdImage: {
          //   data: req.file.filename,
          //   contentType: 'image/png',
          // },
        });
        await newUser.save();
        res.status(200).json({ message: 'user registered successfully' });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  });
};

