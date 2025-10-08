"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import { Avatar } from "./avatar";
import { CategoryBadge } from "./category-badge";
import { PostMeta } from "./post-meta";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Link href={`/blog/${post.slug}`}>
          <motion.article
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200/50 hover:border-orange-300"
          >
            <div className="md:flex">
              {/* Content Section */}
              <div className="md:w-2/3 p-8 lg:p-12">
                {/* Category Badge */}
                <div className="mb-4">
                  <CategoryBadge category={post.category} href={undefined} />
                </div>

                {/* Title */}
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-6 line-clamp-3">
                  {post.description}
                </p>

                {/* Meta Info */}
                <PostMeta
                  publishedAt={post.publishedAt}
                  readingTime={post.readingTime}
                  className="mb-6"
                />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar name={post.author.name} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {post.author.name}
                    </p>
                    {post.author.bio && (
                      <p className="text-xs text-gray-500 line-clamp-1">
                        {post.author.bio}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Tags/Visual Section */}
              <div className="md:w-1/3 bg-gradient-to-br from-orange-50 to-rose-50 p-8 flex flex-col justify-center">
                {post.tags && post.tags.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">
                      Topics Covered
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-white text-gray-700 rounded-full text-sm border border-orange-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        </Link>
      </motion.div>
    );
  }

  // Regular card layout
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${post.slug}`}>
        <motion.article
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
          className="group h-full bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200/50 hover:border-orange-300"
        >
          <div className="p-6">
            {/* Category Badge */}
            <div className="mb-4">
              <CategoryBadge
                category={post.category}
                size="sm"
                href={undefined}
              />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
              {post.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-4 line-clamp-2">
              {post.description}
            </p>

            {/* Meta Info */}
            <PostMeta
              publishedAt={post.publishedAt}
              readingTime={post.readingTime}
            />

            {/* Author */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <Avatar name={post.author.name} size="sm" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {post.author.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
