import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";

interface PostMetaProps {
  publishedAt: string;
  readingTime: string;
  className?: string;
}

export function PostMeta({
  publishedAt,
  readingTime,
  className = "",
}: PostMetaProps) {
  return (
    <div
      className={`flex items-center gap-4 text-sm text-gray-500 ${className}`}
    >
      <div className="flex items-center gap-1.5">
        <Calendar className="w-4 h-4" />
        <span>{format(new Date(publishedAt), "MMM d, yyyy")}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Clock className="w-4 h-4" />
        <span>{readingTime}</span>
      </div>
    </div>
  );
}
