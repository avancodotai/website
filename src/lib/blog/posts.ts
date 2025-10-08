import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogPostMetadata, Category } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const metadata = data as BlogPostMetadata;

      // Skip drafts in production
      if (process.env.NODE_ENV === "production" && metadata.draft) {
        return null;
      }

      return {
        slug,
        ...metadata,
        readingTime: readingTime(content).text,
      } as BlogPost;
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    });

  return posts;
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const metadata = data as BlogPostMetadata;

    return {
      slug,
      ...metadata,
      readingTime: readingTime(content).text,
      content,
    };
  } catch {
    return null;
  }
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getPostsByCategory(
  category: Category,
): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category === category);
}

export async function getRecentPosts(limit = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}
