import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPostBySlug, getPostSlugs } from "@/lib/blogs";
import { renderMarkdown } from "@/lib/markdown";
import { BlogMenuClient } from "../BlogMenuClient";

function formatDate(date: string | null) {
  if (!date) {
    return "Undated";
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | OSS Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const article = post;

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
            <span>{formatDate(article.date)}</span>
            {article.author ? <span>{article.author}</span> : null}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{article.title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-white/70">{article.excerpt}</p>
          {article.coverImage ? (
            <img
              src={article.coverImage}
              alt={article.title}
              className="max-h-[28rem] w-full rounded-[1.5rem] border border-white/10 object-cover"
            />
          ) : null}
        </header>

        <div className="space-y-6">{renderMarkdown(article.content, article.slug)}</div>
      </article>
    </main>
  );
}
