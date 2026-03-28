import {
  getAllPosts as getAllPostsLib,
  getPostBySlug as getPostBySlugLib,
  getPostSlugs as getPostSlugsLib,
} from '@/lib/blogs';

export const getAllPosts = getAllPostsLib;
export const getPostBySlug = getPostBySlugLib;
export const getPostSlugs = getPostSlugsLib;