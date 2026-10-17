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
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs ${className}`}
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          Completed
        </span>
      );
    case "in-progress":
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/80 shadow-2xs ${className}`}
        >
          <Clock className="w-3.5 h-3.5 text-amber-600" />
          In Progress
        </span>
      );
    case "approved":
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200/80 shadow-2xs ${className}`}
        >
          <FileCheck className="w-3.5 h-3.5 text-sky-600" />
          Approved / Sanctioned
        </span>
      );
    case "delayed":
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200/80 shadow-2xs ${className}`}
        >
          <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
          Execution Delayed
        </span>
      );
    case "proposed":
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200/80 shadow-2xs ${className}`}
        >
          <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
          Proposed
        </span>
      );
    default:
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200 shadow-2xs ${className}`}
        >
          <HelpCircle className="w-3.5 h-3.5 text-zinc-500" />
          Status Unclear
        </span>
      );
  }
}
