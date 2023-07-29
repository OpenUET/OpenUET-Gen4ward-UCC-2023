import jwt from 'jsonwebtoken';
import { appConfig } from '../../config/app.js';
import User from '../models/User.js';

const JWTPrivateKey = appConfig.jwtPrivateKey;

export const findUserOrAddNew = async (githubId, fullname, avatarUrl) => {
  const user = await User.findOne({ githubId });
  if (user)
    return {
      user,
      isNew: false,
    };

  const newUser = new User({
    githubId,
    fullname,
    avatarUrl,
  })
  newUser.save();
  return { user: newUser, isNew: true };
};

export const signJWT = async ({ id, username, email }) => {
  return new Promise((resolve, reject) => {
    // Default algorithm: HMAC SHA256
    jwt.sign({ id, username, email }, JWTPrivateKey, { expiresIn: '10d' }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

export const verifyJWT = async (token) => {
  return new Promise((resolve, reject) => {
    // Default algorithm: HMAC SHA256
    jwt.verify(token, JWTPrivateKey, (err, payload) => {
      if (err) reject(err);
      resolve(payload);
    });
  });
};
