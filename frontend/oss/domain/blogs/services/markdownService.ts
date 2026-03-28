import { renderMarkdown as renderMarkdownLib } from '@/lib/markdown';

export function renderMarkdown(content: string, slug: string) {
  return renderMarkdownLib(content, slug);
}