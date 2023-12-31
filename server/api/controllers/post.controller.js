import * as postService from '../services/post.service.js';

export const getAllPosts = async (req, res) => {
    const resp = await postService.getAllPosts();
    return res.status(200).json(resp);
};

export const getPostById = async (req, res) => {
    const postId = req.params.id;
    const resp = await postService.getPostById(postId);
    return res.status(200).json(resp);
};

export const getPostsByUserId = async (req, res) => {
    const owner = req.params.id;
    const resp = await postService.getPostsByUserId(owner);
    return res.status(200).json(resp);
};

export const createPost = async (req, res) => {
    const { data, userId: owner } = req.body;
    const {
        title,
        projectName,
        content,
        tags,
        forkedProjectId,
        githubLink,
        status,
        cover_img_url,
        logo_url,
        subject_id,
        techs,
        description,
    } = data;

    const resp = await postService.createPost({
        owner,
        title,
        projectName,
        content,
        tags,
        forkedProjectId,
        githubLink,
        status,
        cover_img_url,
        logo_url,
        subject_id,
        techs,
        description,
    });
    return res.status(201).json(resp);
};

export const updatePostById = async (req, res) => {
    const postId = req.params.id;
    const { data, userId: ownerId } = req.body;

    const {
        title,
        projectName,
        content,
        tags,
        forkedProjectId,
        githubLink,
        status,
        cover_img_url,
        logo_url,
        subject_id,
        techs,
        description,
    } = data;

    const resp = await postService.updatePostById(postId, {
        ownerId,
        title,
        projectName,
        content,
        tags,
        forkedProjectId,
        githubLink,
        status,
        cover_img_url,
        logo_url,
        subject_id,
        techs,
        description,
    });
    return res.status(200).json(resp);
};
export const starPostById = async (req, res) => {
    const postId = req.params.id;
    const { userId } = req.query;
    const resp = await postService.starPostById(postId, userId);
    //if (!resp) return res.status(404).json({ message: 'Post not found' });
    return res.status(200).json(resp);
};

export const deletePostById = async (req, res) => {
    const postId = req.params.id;
    const resp = await postService.deletePostById(postId);
    if (!resp) return res.status(404).json({ message: 'Post not found' });
    return res.status(200).json(resp);
};
