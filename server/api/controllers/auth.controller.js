import axios from 'axios';
import { appConfig } from '../../config/app.js';
import * as authService from '../services/auth.service.js';
import { findUserOrAddNew } from '../services/auth.service.js';

const GITHUB_CLIENT_SECRET = appConfig.githubClientSecret;
const GITHUB_CLIENT_ID = appConfig.githubClientId;
const GITHUB_URL = 'https://github.com/login/oauth/access_token';
const GITHUB_USER_URL = 'https://api.github.com/user';

export const loginWithGithub = async (req, res) => {
  const { code } = req.query;

  const response = await axios({
    method: 'POST',
    url: `${GITHUB_URL}?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`,
    headers: {
      accept: 'application/json',
    },
  });

  const accessToken = response.data.access_token;
  {
    const response = await axios.get(GITHUB_USER_URL, {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    });

    console.log(response.data);
    const { id: githubId, name: fullname, avatar_url: avatarUrl } = response.data;

    const { user, isNew } = await findUserOrAddNew(githubId, fullname, avatarUrl);
    const jwtToken = await authService.signJWT({
      _id: user._id,
      gihubId: user.githubId,
    });

    return res.status(200).json({
      user,
      isNew,
      jwtToken,
    });
  }
};

export const loginWithJwt = async (req, res) => {
  const { token } = req.body;
  const response = await authService.verifyJWT(token);
  return res.status(200).json(response);
};
