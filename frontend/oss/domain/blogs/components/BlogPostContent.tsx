import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '../services/blogService';
import { renderMarkdown } from '../services/markdownService';
import { formatDate } from '../utils/date';
import { BlogMenuClient } from './BlogMenuClient';

interface BlogPostContentProps {
  slug: string;
}

export default async function BlogPostContent({ slug }: BlogPostContentProps) {
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(8,145,178,0.2),transparent_35%),linear-gradient(180deg,#020617_0%,#030712_100%)] px-6 py-16 text-white md:px-10">
      <BlogMenuClient />
      <article className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <Link
          href="/blog"
          className="inline-flex w-fit items-center text-sm uppercase tracking-[0.25em] text-cyan-200/80 transition-colors hover:text-cyan-100"
        >
          Back to blog
        </Link>

        <header className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.22em] text-white/50">
            <span>{formatDate(post.date, true)}</span>
            {post.author && <span>{post.author}</span>}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{post.title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">{post.excerpt}</p>
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="max-h-[28rem] w-full rounded-[1.5rem] border border-white/10 object-cover"
            />
          )}
        </header>

        <div className="space-y-6">{renderMarkdown(post.content, post.slug)}</div>
      </article>
    </main>
  );
}