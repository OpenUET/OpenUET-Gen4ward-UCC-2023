import * as userService from '../services/user.service.js';

export const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  return users;
};

export const getUserById = async (req, res) => {
  const user = await getUserById(req.params.id);
  return user;
};
