import Link from "next/link";
import { CATEGORY_COLORS, CATEGORY_NAMES } from "@/lib/blog/constants";
import type { Category } from "@/types/blog";

interface CategoryBadgeProps {
  category: Category;
  size?: "sm" | "md";
  href?: string;
}

export function CategoryBadge({
  category,
  size = "md",
  href = "/blog",
}: CategoryBadgeProps) {
  const sizeClasses = size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-2 text-sm";

  const badge = (
    <span
      className={`inline-block ${sizeClasses} font-medium rounded-full border ${CATEGORY_COLORS[category]}`}
    >
      {CATEGORY_NAMES[category]}
    </span>
  );

  if (href) {
    return <Link href={href}>{badge}</Link>;
  }

  return badge;
}
