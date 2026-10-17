import { ProjectStatus } from "@/types/project";
import { CheckCircle2, Clock, AlertCircle, FileCheck, HelpCircle } from "lucide-react";

interface StatusPillProps {
  status: ProjectStatus;
  className?: string;
}

export default function StatusPill({ status, className = "" }: StatusPillProps) {
  switch (status) {
    case "completed":
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-950/40 text-emerald-300 border border-emerald-800/50 ${className}`}
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          Completed
        </span>
      );
    case "in-progress":
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-950/40 text-amber-300 border border-amber-800/50 ${className}`}
        >
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          In Progress
        </span>
      );
    case "approved":
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-950/40 text-blue-300 border border-blue-800/50 ${className}`}
        >
          <FileCheck className="w-3.5 h-3.5 text-blue-400" />
          Approved / Sanctioned
        </span>
      );
    case "delayed":
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-950/40 text-rose-300 border border-rose-800/50 ${className}`}
        >
          <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
          Execution Delayed
        </span>
      );
    case "proposed":
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-950/40 text-purple-300 border border-purple-800/50 ${className}`}
        >
          <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
          Proposed
        </span>
      );
    default:
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-400 border border-zinc-700 ${className}`}
        >
          <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
          Status Unclear
        </span>
      );
  }
}
