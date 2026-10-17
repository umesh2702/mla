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
      className={`inline-flex items-center gap-1.5 text-xs text-[#24212A] hover:text-[#D72B75] transition-colors py-1.5 px-3 rounded-xl bg-white hover:bg-[#FFF8F8] border border-[#F0E4EA] hover:border-[#D72B75]/40 shadow-xs group ${className}`}
      title={`Open source: ${title} (${publisher || "External"})`}
    >
      <ShieldCheck className="w-3.5 h-3.5 text-[#D72B75] shrink-0" />
      <span className="truncate max-w-[220px] sm:max-w-[320px] font-medium text-[#24212A] group-hover:text-[#D72B75]">
        {title}
      </span>
      {publisher && (
        <span className="hidden sm:inline text-[11px] text-[#77717B]">
          &bull; {publisher}
        </span>
      )}
      {status && (
        <span className="text-[10px] uppercase font-bold text-[#A51D55] bg-[#FCE7F0] px-1.5 py-0.5 rounded-full">
          {status}
        </span>
      )}
      <ExternalLink className="w-3 h-3 text-[#77717B] group-hover:text-[#D72B75] shrink-0 ml-auto" />
    </a>
  );
}
