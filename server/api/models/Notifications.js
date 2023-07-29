import mongoose, { Schema } from 'mongoose';
import { NOTI_TYPES } from '../constants/types';

const NotiBodySchema = new Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  notiType: {
    type: String,
    enum: [...Object.values(NOTI_TYPES)],
  },
  title: {
    type: String,
    required: true,
  },
  idRead: {
    type: Boolean,
    default: false,
  },
});

const NotificationSchema = new Schema(
  {
    user: {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      lastRead: {
        type: Date,
        default: Date.now,
      },
      recentNotifications: {
        type: [NotiBodySchema],
      },
    },
  },
  { timestamps: true },
);

export default mongoose.model('Notification', NotificationSchema);
