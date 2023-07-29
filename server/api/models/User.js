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
      default: null,
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
