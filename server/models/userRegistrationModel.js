import mongoose from 'mongoose';

const userRegistrationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    enum: ['Government Official', 'Non Government'],
    // required: true,
  },
  Imgname: {
    type: String,
  },
  govIdImage: {
    data: Buffer,
    contentType: String,
  },
});

const userRegistrationModel = mongoose.model(
  'userRegistration',
  userRegistrationSchema
);

export default userRegistrationModel;
