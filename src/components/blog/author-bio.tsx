import type { Author } from "@/types/blog";
import { Avatar } from "./avatar";

interface AuthorBioProps {
  author: Author;
}

export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null;

  return (
    <div className="mt-12 p-6 bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl border border-orange-200/50">
      <div className="flex items-start gap-4">
        <Avatar name={author.name} size="lg" />
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">
            About {author.name}
          </h3>
          <p className="text-gray-600 text-sm">{author.bio}</p>
        </div>
      </div>
    </div>
  );
}
