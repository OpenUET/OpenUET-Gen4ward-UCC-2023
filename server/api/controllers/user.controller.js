import * as userService from '../services/user.service.js';

export const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

export const getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  return res.status(200).json(user);
};
