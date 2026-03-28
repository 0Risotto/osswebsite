import type { ReactNode } from "react";

function resolveAssetSource(src: string, slug: string) {
  if (/^(https?:)?\/\//.test(src) || src.startsWith("/")) {
    return src;
  }

  return `/blog-assets/${slug}/${src}`;
}

function parseInlineMarkdown(text: string, slug: string, keyPrefix: string): ReactNode[] {
  const pattern =
    /!\[([^\]]*)\]\(([^)]+)\)|\[(.*?)\]\(([^)]+)\)|\*\*(.+?)\*\*|_(.+?)_|\*(.+?)\*/;
  const match = text.match(pattern);

  if (!match || match.index === undefined) {
    return [text];
  }

  const before = text.slice(0, match.index);
  const after = text.slice(match.index + match[0].length);
  const result: ReactNode[] = [];

  if (before) {
    result.push(before);
  }

  if (match[1] !== undefined && match[2] !== undefined) {
    result.push(
      <img
        key={`${keyPrefix}-image-${match.index}`}
        src={resolveAssetSource(match[2], slug)}
        alt={match[1]}
        className="my-6 w-full rounded-2xl border border-white/10 bg-black/20 object-cover"
      />,
    );
  } else if (match[3] !== undefined && match[4] !== undefined) {
    result.push(
      <a
        key={`${keyPrefix}-link-${match.index}`}
        href={match[4]}
        target={match[4].startsWith("http") ? "_blank" : undefined}
        rel={match[4].startsWith("http") ? "noreferrer" : undefined}
        className="text-cyan-300 underline decoration-cyan-400/50 underline-offset-4"
      >
        {parseInlineMarkdown(match[3], slug, `${keyPrefix}-link-text-${match.index}`)}
      </a>,
    );
  } else if (match[5] !== undefined) {
    result.push(
      <strong key={`${keyPrefix}-strong-${match.index}`} className="font-semibold text-white">
        {parseInlineMarkdown(match[5], slug, `${keyPrefix}-strong-text-${match.index}`)}
      </strong>,
    );
  } else if (match[6] !== undefined) {
    result.push(
      <em key={`${keyPrefix}-em-${match.index}`} className="italic">
        {parseInlineMarkdown(match[6], slug, `${keyPrefix}-em-text-${match.index}`)}
      </em>,
    );
  } else if (match[7] !== undefined) {
    result.push(
      <em key={`${keyPrefix}-em2-${match.index}`} className="italic">
        {parseInlineMarkdown(match[7], slug, `${keyPrefix}-em2-text-${match.index}`)}
      </em>,
    );
  }

  return result.concat(parseInlineMarkdown(after, slug, `${keyPrefix}-tail-${match.index}`));
}

function renderParagraph(lines: string[], slug: string, key: string) {
  const text = lines.join(" ").trim();

  if (!text) {
    return null;
  }

  return (
    <p key={key} className="text-base leading-8 text-white/80 md:text-lg">
      {parseInlineMarkdown(text, slug, `${key}-inline`)}
    </p>
  );
}

export function renderMarkdown(markdown: string, slug: string) {
  const lines = markdown.split(/\r?\n/);
  const nodes: ReactNode[] = [];
  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let quoteBuffer: string[] = [];

  const flushParagraph = () => {
    if (!paragraphBuffer.length) {
      return;
    }

    const node = renderParagraph(paragraphBuffer, slug, `paragraph-${nodes.length}`);
    if (node) {
      nodes.push(node);
    }
    paragraphBuffer = [];
  };

  const flushList = () => {
    if (!listBuffer.length || !listType) {
      return;
    }

    const Tag = listType;
    nodes.push(
      <Tag
        key={`list-${nodes.length}`}
        className="space-y-3 pl-6 text-base leading-8 text-white/80 marker:text-cyan-300 md:text-lg"
      >
        {listBuffer.map((item, index) => (
          <li key={`list-item-${index}`}>
            {parseInlineMarkdown(item, slug, `list-item-${nodes.length}-${index}`)}
          </li>
        ))}
      </Tag>,
    );
    listBuffer = [];
    listType = null;
  };

  const flushQuote = () => {
    if (!quoteBuffer.length) {
      return;
    }

    nodes.push(
      <blockquote
        key={`quote-${nodes.length}`}
        className="border-l-2 border-cyan-400/70 pl-5 text-lg leading-8 text-white/70 italic"
      >
        {parseInlineMarkdown(quoteBuffer.join(" "), slug, `quote-${nodes.length}`)}
      </blockquote>,
    );
    quoteBuffer = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line || line === "{{< lead >}}" || line === "{{< /lead >}}") {
      flushParagraph();
      flushList();
      flushQuote();
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      flushQuote();

      const level = Math.min(headingMatch[1].length, 6);
      const content = parseInlineMarkdown(
        headingMatch[2],
        slug,
        `heading-${nodes.length}-${level}`,
      );

      if (level === 1) {
        nodes.push(
          <h1 key={`heading-${nodes.length}`} className="text-4xl font-semibold tracking-tight text-white">
            {content}
          </h1>,
        );
      } else if (level === 2) {
        nodes.push(
          <h2
            key={`heading-${nodes.length}`}
            className="pt-6 text-3xl font-semibold tracking-tight text-white"
          >
            {content}
          </h2>,
        );
      } else {
        nodes.push(
          <h3 key={`heading-${nodes.length}`} className="pt-4 text-2xl font-medium text-white">
            {content}
          </h3>,
        );
      }
      continue;
    }

    const unorderedMatch = line.match(/^[-*]\s+(.*)$/);
    if (unorderedMatch) {
      flushParagraph();
      flushQuote();
      if (listType && listType !== "ul") {
        flushList();
      }
      listType = "ul";
      listBuffer.push(unorderedMatch[1]);
      continue;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      flushParagraph();
      flushQuote();
      if (listType && listType !== "ol") {
        flushList();
      }
      listType = "ol";
      listBuffer.push(orderedMatch[1]);
      continue;
    }

    const quoteMatch = line.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      flushParagraph();
      flushList();
      quoteBuffer.push(quoteMatch[1]);
      continue;
    }

    flushList();
    flushQuote();
    paragraphBuffer.push(line);
  }

  flushParagraph();
  flushList();
  flushQuote();

  return nodes;
}
