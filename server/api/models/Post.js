import mongoose, { Schema } from 'mongoose';
import { POST_STATUS } from '../constants/types.js';

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    members: {
      type: [Schema.Types.ObjectId],
      ref: 'User',
      default: [],
    },
    stars: {
      type: [Schema.Types.ObjectId],
      ref: 'User',
      default: [],
    },
    comments: {
      type: [Schema.Types.ObjectId],
      ref: 'Comment',
      default: [],
    },
    tags: {
      type: [Object],
      default: [],
    },
    forkedProject: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      default: null,
    },
    status: {
      type: String,
      enum: [...Object.values(POST_STATUS)],
      default: POST_STATUS.ACTIVE,
    },
    githubLink: {
      type: String,
      required: false,
    },
    socialLink: {
      slack: {
        type: String,
      },
      jira: {
        type: String,
      },
      discord: {
        type: String,
      },
    },
    cover_img_url: {
      type: String,
      required: false,
    },
    logo_url: {
      type: String,
      required: false,
    },
    subject_id: {
      type: [String],
      required: false,
    },
    pendingRequests: {
      type: [
        {
          userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
          },
        },
      ],
      default: [],
    },
    pendingInvitations: {
      type: [
        {
          userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true },
);

export default mongoose.model('Post', PostSchema);
