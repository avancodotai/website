interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-16 h-16 text-xl",
};

export function Avatar({ name, size = "md" }: AvatarProps) {
  return (
    <div
      className={`${sizeClasses[size]} bg-gradient-to-br from-orange-400 to-rose-400 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}
    >
      {name.charAt(0)}
    </div>
  );
}
