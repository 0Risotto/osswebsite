import {
  getAllPosts as getAllPostsLib,
  getPostBySlug as getPostBySlugLib,
  getPostSlugs as getPostSlugsLib,
} from '@/domain/blogs/services/blogs.services';

export const getAllPosts = getAllPostsLib;
export const getPostBySlug = getPostBySlugLib;
export const getPostSlugs = getPostSlugsLib;