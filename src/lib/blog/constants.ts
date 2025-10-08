import type { Category } from "@/types/blog";

export const CATEGORY_NAMES: Record<Category, string> = {
  "bjj-techniques": "BJJ Techniques",
  "training-tips": "Training Tips",
  "product-updates": "Product Updates",
  community: "Community",
  "getting-started": "Getting Started",
} as const;

export const CATEGORY_COLORS: Record<Category, string> = {
  "bjj-techniques": "bg-blue-100 text-blue-700 border-blue-200",
  "training-tips": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "product-updates": "bg-purple-100 text-purple-700 border-purple-200",
  community: "bg-amber-100 text-amber-700 border-amber-200",
  "getting-started": "bg-rose-100 text-rose-700 border-rose-200",
} as const;
