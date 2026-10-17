import { ExternalLink, ShieldCheck } from "lucide-react";

interface SourceLinkProps {
  title: string;
  publisher?: string;
  url: string;
  status?: string;
  className?: string;
}

export default function SourceLink({
  title,
  publisher,
  url,
  status,
  className = "",
}: SourceLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-xs text-[#9EA39F] hover:text-[#D72B75] transition-colors py-1 px-2 rounded bg-[#101113] border border-[#2D313A] hover:border-[#D72B75]/40 group ${className}`}
      title={`Open source: ${title} (${publisher || "External"})`}
    >
      <ShieldCheck className="w-3.5 h-3.5 text-[#D72B75] shrink-0" />
      <span className="truncate max-w-[220px] sm:max-w-[320px] font-medium text-[#E8E2D7]">
        {title}
      </span>
      {publisher && (
        <span className="hidden sm:inline text-[11px] text-[#777B78]">
          &bull; {publisher}
        </span>
      )}
      {status && (
        <span className="text-[10px] uppercase font-semibold text-[#D72B75] bg-[#D72B75]/10 px-1 rounded">
          {status}
        </span>
      )}
      <ExternalLink className="w-3 h-3 text-[#777B78] group-hover:text-[#D72B75] shrink-0" />
    </a>
  );
}
