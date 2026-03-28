import Link from 'next/link';
import { getAllPosts } from '../services/blogService';
import { formatDate } from '../utils/date';

export default async function BlogHighlights() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <section className="px-6 py-24 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex rounded-full px-4 py-1 text-sm uppercase tracking-[0.28em]">
              Blog
            </span>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              some of our recent blogs :)
            </h2>
            <p className="text-lg leading-8">
              These entries are made by our beloved members!
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex w-fit items-center text-sm uppercase tracking-[0.25em]"
          >
            View all posts
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-[2rem] transition-colors"
            >
              {post.coverImage ? (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="h-52" />
              )}

              <div className="space-y-4 p-6">
                <div className="text-sm uppercase tracking-[0.2em]">
                  {formatDate(post.date)}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{post.title}</h3>
                <p className="line-clamp-4 text-base leading-7">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}