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
    hero: "w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 text-4xl",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#191B20] border border-[#2D313A] shadow-xl flex items-center justify-center shrink-0 select-none group ${sizeClasses[size]} ${className}`}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : null}

      {/* Graceful Fallback Portrait */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1E222A] via-[#16181C] to-[#101113] p-4 text-center">
          <div className="w-16 h-16 rounded-full bg-[#D72B75]/10 border border-[#D72B75]/30 flex items-center justify-center mb-2 shadow-inner">
            <span className="font-display font-bold text-[#E8E2D7] tracking-wider text-xl">
              {initials}
            </span>
          </div>
          <span className="text-xs text-[#9EA39F] font-medium line-clamp-1 max-w-full px-2">
            {name}
          </span>
          <span className="text-[10px] text-[#777B78] uppercase tracking-wider mt-0.5">
            BRS Leadership
          </span>
        </div>
      )}
    </div>
  );
}
