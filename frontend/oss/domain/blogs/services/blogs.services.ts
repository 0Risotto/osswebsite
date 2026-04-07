'use server';

import type { Dirent } from "fs";
import { promises as fs } from "fs";
import path from "path";

export type BlogPost = {
  slug: string;
  title: string;
  date: string | null;
  draft: boolean;
  author: string | null;
  excerpt: string;
  content: string;
  coverImage: string | null;
};

const postsRoot = path.join(process.cwd(), "public", "content", "posts");
const coverCandidates = [
  "cover.png",
  "cover.jpg",
  "cover.jpeg",
  "feature.png",
  "feature.jpg",
  "feature.jpeg",
  "thumb.png",
  "thumb.jpg",
  "thumb.jpeg",
];

type Frontmatter = {
  title?: string;
  date?: string;
  draft?: string;
  author?: string;
};

function parseFrontmatter(fileContents: string) {
  const match = fileContents.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    return {
      frontmatter: {} as Frontmatter,
      content: fileContents.trim(),
    };
  }

  const [, rawFrontmatter, content] = match;
  const frontmatter = rawFrontmatter.split(/\r?\n/).reduce<Frontmatter>((acc, line) => {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      return acc;
    }

    const key = line.slice(0, separatorIndex).trim() as keyof Frontmatter;
    const value = line.slice(separatorIndex + 1).trim().replace(/^"(.*)"$/, "$1");
    acc[key] = value;
    return acc;
  }, {});

  return {
    frontmatter,
    content: content.trim(),
  };
}

function cleanExcerpt(markdown: string) {
  return markdown
    .replace(/{{<\s*\/?lead\s*>}}/g, "")
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, "$1")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/[*_`>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function resolveCoverImage(slug: string) {
  for (const fileName of coverCandidates) {
    try {
      await fs.access(path.join(postsRoot, slug, fileName));
      // Return URL path from public folder (no leading ./)
      return `/content/posts/${slug}/${fileName}`;
    } catch {}
  }

  return null;
}

async function readPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(postsRoot, slug, "index.en.md");

  try {
    const raw = await fs.readFile(filePath, "utf8");
    const { frontmatter, content } = parseFrontmatter(raw);
    const excerptSource = content
      .split(/\r?\n\r?\n/)
      .map((section) => cleanExcerpt(section))
      .find(Boolean) ?? "";

    return {
      slug,
      title: frontmatter.title ?? slug,
      date: frontmatter.date ?? null,
      draft: frontmatter.draft === "true",
      author: frontmatter.author ?? null,
      excerpt: excerptSource,
      content,
      coverImage: await resolveCoverImage(slug),
    };
  } catch {
    return null;
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const entries = await fs.readdir(postsRoot, { withFileTypes: true });
  const posts = await Promise.all(
    entries
      .filter((entry: Dirent) => entry.isDirectory() && !entry.name.startsWith("_"))
      .map((entry: Dirent) => readPost(entry.name)),
  );
  return posts
    .filter((post): post is BlogPost => post !== null && !post.draft)
    .sort((a, b) => {
      if (!a.date || !b.date) {
        return a.title.localeCompare(b.title);
      }

      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = await readPost(slug);

  if (!post || post.draft) {
    return null;
  }

  return post;
}

export async function getBlogPostsCount(): Promise<number> {
  const entries = await fs.readdir(postsRoot, { withFileTypes: true });
  
  const postChecks = await Promise.all(
    entries
      .filter((entry: Dirent) => entry.isDirectory() && !entry.name.startsWith("_"))
      .map(async (entry: Dirent) => {
        const filePath = path.join(postsRoot, entry.name, "index.en.md");
        try {
          const content = await fs.readFile(filePath, "utf8");
          return !content.includes("draft: true");
        } catch {
          return false;
        }
      })
  );
  
  return postChecks.filter(Boolean).length;
}
