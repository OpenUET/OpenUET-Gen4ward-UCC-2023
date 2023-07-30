import * as postService from '../services/post.service.js';

export const getTeamByPostId = async (req, res) => {
  const postId = req.params.id;
  const resp = await postService.getTeamByPostId(postId);
  return res.status(200).json(resp);
};

export const getAllTeams = async (_, res) => {
  const resp = await postService.getAllTeams();
  return res.status(200).json(resp);
};

/*******/

export const inviteUser = async (req, res) => {
  const postId = req.params.id;
  const { owner, userId: invitedUser } = req.body;
  const resp = await postService.inviteUser(owner, invitedUser, postId);
  return res.status(200).json(resp);
};

export const responseToInvitation = async (req, res) => {
  const type = req.query.type;
  const postId = req.params.id;
  const { userId } = req.body;

  const resp = await postService.responseToInvitation(type, userId, postId);
  return res.status(200).json(resp);
};

/*******/

export const requestToJoin = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;

  console.log(postId, userId);

  const resp = await postService.requestToJoin(userId, postId);

  return res.status(200).json(resp);
};

export const responseToJoiningRequest = async (req, res) => {
  const type = req.query.type;
  const postId = req.params.id;
  const { owner, userId } = req.body;

  console.log(userId);

  const resp = await postService.responseToJoiningRequest(type, owner, userId, postId);

  return res.status(200).json(resp);
};
