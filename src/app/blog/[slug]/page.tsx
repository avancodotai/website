import { format } from "date-fns";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AuthorBio } from "@/components/blog/author-bio";
import { Avatar } from "@/components/blog/avatar";
import { CategoryBadge } from "@/components/blog/category-badge";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { compileContent } from "@/lib/blog/mdx";
import { getAllPosts, getPost } from "@/lib/blog/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Avanço",
    };
  }

  return {
    title: `${post.title} | Avanço Blog`,
    description: post.description,
    authors: [{ name: post.author.name }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      url: `https://avanco.ai/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post || !post.content) {
    notFound();
  }

  const { content } = await compileContent(post.content);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="pt-8 pb-20">
        {/* Back to Blog */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Post Header */}
        <header className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-3xl mx-auto">
            {/* Category */}
            <div className="mb-4">
              <CategoryBadge category={post.category} size="sm" />
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-6">{post.description}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Avatar name={post.author.name} />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {post.author.name}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>
                  {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose-blog">{content}</div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <AuthorBio author={post.author} />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
