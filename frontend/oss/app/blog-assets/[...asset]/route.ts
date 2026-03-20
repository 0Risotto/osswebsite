import { promises as fs } from "fs";
import path from "path";

const postsRoot = path.join(process.cwd(), "content", "content", "posts");

function contentTypeFor(fileName: string) {
  const extension = path.extname(fileName).toLowerCase();

  switch (extension) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    case ".gif":
      return "image/gif";
    case ".svg":
      return "image/svg+xml";
    default:
      return "application/octet-stream";
  }
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ asset: string[] }> },
) {
  const { asset } = await params;
  const filePath = path.join(postsRoot, ...asset);
  const normalizedPath = path.normalize(filePath);

  if (!normalizedPath.startsWith(postsRoot)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const file = await fs.readFile(normalizedPath);

    return new Response(file, {
      headers: {
        "Content-Type": contentTypeFor(normalizedPath),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
