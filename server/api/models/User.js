import mongoose, { Schema } from 'mongoose';
import { ROLES } from '../constants/types';

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    githubId: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [...Object.values(ROLES)],
    },
    avatarUrl: {
      type: String, 
      required: false,
      default: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
    },
    studentId: {
      type: String,
      required: false,
    },
    class: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model('User', UserSchema);
