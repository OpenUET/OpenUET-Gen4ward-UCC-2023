import Post from '../models/Post.js';
import { ObjectId } from 'mongodb';

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

export const starPostById = async (postId, userId) => {
    const postExists = await Post.exists({ _id: postId });
    if (!postExists)
        return {
            success: false,
            message: 'Post not found',
        };

    const starExists = await Post.exists({
        _id: postId,
        stars: {
            $elemMatch: {
                $eq: userId,
            },
        },
    });
    const isStarred = !!starExists;

    const resp = await Post.findByIdAndUpdate(
        postId,
        {
            ...(isStarred && {
                $pull: {
                    stars: userId,
                },
            }),
            ...(!isStarred && {
                $push: {
                    stars: userId,
                },
            }),
        },
        { new: true },
    );
    return {
        success: true,
        data: resp,
    };
};
