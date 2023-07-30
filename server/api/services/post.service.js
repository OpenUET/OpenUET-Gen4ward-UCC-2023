import Post from '../models/Post.js';

export const getAllPosts = async () => {
  const posts = await Post.find({});
  return posts;
};

export const getPostById = async (postId) => {
  const post = await Post.findById(postId);
  return post;
};

export const createPost = async (data) => {
  const post = await Post.create(data);
  return post;
};

export const updatePostById = async (postId, data) => {
  const post = await Post.findByIdAndUpdate(postId, data, { new: true });
  return post;
};

export const deletePostById = async (postId) => {
  const post = await Post.findByIdAndDelete(postId);
  return post;
};

export const getPostsByUserId = async (userId) => {
  const posts = await Post.find({ owner: userId });
  return posts;
};

export const getPostsByTag = async (tag) => {
  const posts = await Post.find({ tags: tag });
  return posts;
};

export const getPostsByTitle = async (title) => {
  const posts = await Post.find({ title: { $regex: title, $options: 'i' } });
  return posts;
};

export const getTeamByPostId = async (postId) => {
  try {
    const ownerResp = await Post.findById(postId)
      .populate({
        path: 'owner',
        select: '_id fullname githubId email avatarUrl',
      })
      .select('owner');

    const membersResp = await Post.findById(postId)
      .populate({
        path: 'members',
        //select: '_id fullname githubId email avatarUrl bio',
      })
      .select('members');

    return {
      owner: ownerResp.owner,
      members: membersResp.members,
    };
  } catch (error) {
    throw new Error('Post id not found');
  }
};

export const getAllTeams = async () => {
  const response = await Post.find({})
    .populate({
      path: 'owner',
    })
    .populate({
      path: 'members',
    })
    .select('owner members');
  return response;
};

export const inviteUser = async (owner, invitedUser, postId) => {
  if (owner === invitedUser) {
    throw new Error('Can not invite owner to join team');
  }

  {
    const postExists = await Post.exists({ _id: postId, owner });
    if (!postExists) {
      throw new Error('Post id not found or doesnt belong to user');
    }
  }

  // {
  //   const userExists = await Post.find({
  //     _id: postId,
  //     members: {
  //       $elemMatch: {
  //         userId: { $eq: invitedUser },
  //       },
  //     },
  //   });
  //   if (userExists.length > 0) {
  //     throw new Error('User already in team');
  //   }
  // }

  const response = await Post.findByIdAndUpdate(
    postId,
    {
      $push: {
        pendingInvitations: {
          userId: invitedUser,
          createdAt: Date.now,
        },
      },
    },
    { new: true },
  );

  return {
    success: true,
    data: response,
  };
};

export const responseToInvitation = async (type, owner, userId, postId) => {
  if (owner === userId) {
    throw new Error("Can not response to owner's request");
  }

  {
    const postExists = await Post.exists({ _id: postId, owner });
    if (!postExists) {
      throw new Error('Post id not found or doesnt belong to user');
    }
  }

  const response = await Post.findByIdAndUpdate(
    postId,
    {
      $pull: {
        pendingInvitations: {
          userId,
        },
      },
      ...(type === 'accept' && {
        $push: {
          members: userId,
        },
      }),
    },
    { new: true },
  );

  return response;
};

/******/
export const requestToJoin = async (userId, postId) => {
  {
    const postExists = await Post.exists({ _id: postId });
    if (!postExists) {
      throw new Error('Post id not found');
    }
  }

  const resp = await Post.findByIdAndUpdate(
    postId,
    {
      $push: {
        pendingRequests: {
          userId,
        },
      },
    },
    { new: true },
  );
  return {
    success: true,
    data: resp,
  };
};

export const responseToJoiningRequest = async (type, owner, userId, postId) => {
  if (owner === userId) {
    throw new Error("Can not response to owner's request");
  }

  {
    const postExists = await Post.exists({ _id: postId, owner });
    if (!postExists) {
      throw new Error('Post id not found or doesnt belong to user');
    }
  }

  const response = await Post.findByIdAndUpdate(
    postId,
    {
      $pull: {
        pendingRequests: {
          userId,
        },
      },
      ...(type === 'accept' && {
        $push: {
          members: userId,
        },
      }),
    },
    { new: true },
  );

  return response;
};
