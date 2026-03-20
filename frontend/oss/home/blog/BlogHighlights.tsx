import Link from "next/link";

import { getAllPosts } from "@/lib/blogs";

function formatDate(date: string | null) {
  if (!date) {
    return "Undated";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default async function BlogHighlights() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <section className="bg-[#040b16] px-6 py-24 text-white md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm uppercase tracking-[0.28em] text-cyan-200">
              Blog
            </span>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              some of our recent blogs :)
            </h2>
            <p className="text-lg leading-8 text-white/65">
              These entries are made by our beloved members!
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex w-fit items-center text-sm uppercase tracking-[0.25em] text-cyan-200"
          >
            View all posts
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition-colors hover:border-cyan-300/40"
            >
              {post.coverImage ? (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="h-52 bg-[linear-gradient(135deg,rgba(6,182,212,0.35),rgba(15,23,42,0.95))]" />
              )}

              <div className="space-y-4 p-6">
                <div className="text-sm uppercase tracking-[0.2em] text-white/45">
                  {formatDate(post.date)}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{post.title}</h3>
                <p className="line-clamp-4 text-base leading-7 text-white/70">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
