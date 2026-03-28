import { BlogListing, BlogMenu } from '@/domain/blogs';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_35%),linear-gradient(180deg,#07111f_0%,#020617_55%,#02030a_100%)] px-6 py-20 text-white md:px-10">
      <BlogMenu />
      <BlogListing />
    </main>
  );
}