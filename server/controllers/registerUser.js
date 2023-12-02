import bcrypt from 'bcrypt';
import multer from 'multer';
import userRegistrationModel from '../models/userRegistrationModel.js';

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
  const { password, emailId } = req.body;

  const existingUser = await userRegistrationModel.findOne({ emailId });
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log(existingUser);

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
          password: hashedPassword,
          // Imgname: req.body.name,
          // govIdImage: {
          //   data: req.file.filename,
          //   contentType: 'image/png',
          // },
        });
        await newUser.validate();
        await newUser.save();

        if (existingUser) {
          return res
            .status(201)
            .json({ message: 'User already exists with the provided emailId' });
        } else {
          return res
            .status(200)
            .json({ message: 'User registered successfully' });
        }
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  });
};
