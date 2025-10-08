import { format } from "date-fns";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { compileContent } from "@/lib/blog/mdx";
import { getAllPosts, getPost } from "@/lib/blog/posts";

const CATEGORY_NAMES = {
  "bjj-techniques": "BJJ Techniques",
  "training-tips": "Training Tips",
  "product-updates": "Product Updates",
  community: "Community",
  "getting-started": "Getting Started",
} as const;

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
      url: `https://avanco.app/blog/${slug}`,
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
              <Link
                href={`/blog`}
                className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-orange-100 to-rose-100 text-orange-700 border border-orange-200"
              >
                {CATEGORY_NAMES[post.category]}
              </Link>
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
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full flex items-center justify-center text-white font-semibold">
                  {post.author.name.charAt(0)}
                </div>
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
            <div className="prose prose-base prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-headings:decoration-0 prose-h1:no-underline prose-h2:no-underline prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:no-underline prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h4:no-underline prose-h5:no-underline prose-h6:no-underline prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-orange-500 prose-a:no-underline hover:prose-a:text-orange-600 hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-code:bg-orange-50 prose-code:text-orange-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-blockquote:border-l-4 prose-blockquote:border-orange-400 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-ul:list-disc prose-ol:list-decimal prose-li:text-gray-700">
              {content}
            </div>

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
            {post.author.bio && (
              <div className="mt-12 p-6 bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl border border-orange-200/50">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full flex items-center justify-center text-white font-semibold text-xl flex-shrink-0">
                    {post.author.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      About {post.author.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
