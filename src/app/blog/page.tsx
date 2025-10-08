import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogHero } from "@/components/blog/blog-hero";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getAllPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Blog - BJJ Training Tips & Insights | Avanço",
  description:
    "Expert advice, training techniques, and insights to help you master Brazilian Jiu-Jitsu faster. Learn from experienced practitioners and coaches.",
  openGraph: {
    title: "Blog - BJJ Training Tips & Insights | Avanço",
    description:
      "Expert advice, training techniques, and insights to help you master Brazilian Jiu-Jitsu faster.",
    url: "https://avanco.app/blog",
    siteName: "Avanço",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-rose-50">
      <Header />
      <BlogHero />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Featured Post (First One Only) */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Featured Post
            </h2>
            <BlogCard post={featuredPosts[0]} featured />
          </div>
        )}

        {/* All Posts Grid */}
        {(featuredPosts.slice(1).length > 0 || regularPosts.length > 0) && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {featuredPosts.length > 0 ? "Latest Posts" : "All Posts"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...featuredPosts.slice(1), ...regularPosts].map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        )}

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
