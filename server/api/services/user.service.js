import User from '../models/User.js';

export const getAllUsers = async () => {
  const users = await User.find({});
  return users;
};

export const getUserById = async (_id) => {
  const user = await User.findOne({ _id });
  return user;
};
