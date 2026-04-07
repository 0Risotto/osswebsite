import { getBlogPostsCount } from "@/domain/blogs/services/blogs.services";

export type Stat = {
  value: string;
  label: string;
};

export async function getStats(): Promise<Stat[]> {
  const blogCount = await getBlogPostsCount();
  
  return [
    { value: "100", label: "Active Members" },
    { value: blogCount.toString(), label: "Blogs" },
    { value: "24/7", label: "Community Support" },
    { value: "Open", label: "Source Everything" },
  ];
}