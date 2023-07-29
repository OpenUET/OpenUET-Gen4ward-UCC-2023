import axios from '../config/axios'

export const handleGithubLogin = async (code) => {
  return axios.get(`/auth/github/login?code=${code}`)
}
