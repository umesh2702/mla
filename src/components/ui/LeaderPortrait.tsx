"use client";

import { useState } from "react";
import Image from "next/image";

interface LeaderPortraitProps {
  src: string;
  alt: string;
  initials: string;
  name: string;
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  priority?: boolean;
}

export default function LeaderPortrait({
  src,
  alt,
  initials,
  name,
  size = "md",
  className = "",
  priority = false,
}: LeaderPortraitProps) {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: "w-12 h-12 text-sm",
    md: "w-24 h-24 text-xl",
    lg: "w-36 h-36 md:w-44 md:h-44 text-2xl",
    hero: "w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 text-4xl",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFF8F8] to-[#FCE7F0] border border-[#F0E4EA] shadow-soft flex items-center justify-center shrink-0 select-none group ${sizeClasses[size]} ${className}`}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
          onError={() => setHasError(true)}
        />
      ) : (
        /* Polished light fallback */
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF8F8] via-[#FCE7F0] to-[#F8D7E5] p-4 text-center">
          <div className="w-16 h-16 rounded-full bg-white border border-[#D72B75]/30 flex items-center justify-center mb-2 shadow-xs">
            <span className="font-display font-bold text-[#A51D55] tracking-wider text-xl">
              {initials}
            </span>
          </div>
          <span className="text-xs text-[#24212A] font-semibold line-clamp-1 max-w-full px-2">
            {name}
          </span>
          <span className="text-[10px] text-[#A51D55] font-medium uppercase tracking-wider mt-0.5">
            BRS Leadership
          </span>
        </div>
      )}
    </div>
  );
}
