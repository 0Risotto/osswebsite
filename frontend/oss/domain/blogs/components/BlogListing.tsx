import Link from 'next/link';
import { getAllPosts } from '../services/blogService';
import { formatDate } from '../utils/date';

export default async function BlogListing() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
      <header className="max-w-3xl space-y-5">
        <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm uppercase tracking-[0.3em] text-cyan-200">
          Blog
        </span>
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Stories, guides, and updates from the OSS community.
        </h1>
        <p className="text-lg leading-8 text-white/70">
          Explore articles, tutorials, and reflections from our community as we share what we learn, build, and
          contribute.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
          >
            {post.coverImage ? (
              <img
                src={post.coverImage}
                alt={post.title}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-56 items-end bg-[linear-gradient(135deg,rgba(6,182,212,0.35),rgba(15,23,42,0.95))] p-6">
                <span className="text-sm uppercase tracking-[0.3em] text-cyan-100/70">
                  Open source writing
                </span>
              </div>
            )}

            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between gap-4 text-sm text-white/50">
                <span>{formatDate(post.date, true)}</span>
                {post.author && (
                  <span className="uppercase tracking-[0.2em]">{post.author}</span>
                )}
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">{post.title}</h2>
              <p className="line-clamp-4 text-base leading-7 text-white/70">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm font-medium uppercase tracking-[0.2em] text-cyan-200"
              >
                Read article
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}