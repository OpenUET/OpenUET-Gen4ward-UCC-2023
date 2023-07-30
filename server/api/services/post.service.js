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
  const posts = await Post.find({ userId });
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