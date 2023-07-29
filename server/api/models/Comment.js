import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    parentCommentId: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      default: null,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Comment', CommentSchema);
