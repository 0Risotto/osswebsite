import About from "./about/About";
import BlogHighlights from "./blog/BlogHighlights";
import { Hero } from "./hero/Hero";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-[100vw]">
      <Hero />
      <About />
      <BlogHighlights />
    </main>

  )
}

