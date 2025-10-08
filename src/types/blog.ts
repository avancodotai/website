export type Category =
  | "bjj-techniques"
  | "training-tips"
  | "product-updates"
  | "community"
  | "getting-started";

export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
  twitter?: string;
}

export interface BlogPostMetadata {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: Author;
  category: Category;
  tags?: string[];
  coverImage?: string;
  coverImageAlt?: string;
  featured?: boolean;
  draft?: boolean;
}

export interface BlogPost extends BlogPostMetadata {
  slug: string;
  readingTime: string;
  content?: string;
}
