import axios from 'axios';
import { appConfig } from '../../config/app.js';

const GITHUB_CLIENT_SECRET = appConfig.GITHUB_CLIENT_SECRET;
const GITHUB_CLIENT_ID = appConfig.GITHUB_CLIENT_ID;
const GITHUB_URL = 'https://github.com/login/oauth/access_token';
const GITHUB_USER_URL = 'https://api.github.com/user';

export const redirectOauth = async (req, res) => {
  const { code } = req.query;

  const response = await axios({
    method: 'POST',
    url: `${GITHUB_URL}?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`,
    headers: {
      accept: 'application/json',
    },
  });

  const token = response.data.access_token;

  if (token) {
    const response = await axios.get(GITHUB_USER_URL, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    return res.status(200).json(response.data);
  }
};
