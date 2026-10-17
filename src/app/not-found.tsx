import Link from "next/link";
import { Search, AlertCircle, Home } from "lucide-react";

export const metadata = {
  title: "Profile Not Found | BRS Leadership Platform",
  description: "The requested leadership profile or legislative dossier could not be located in our verified directory.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center space-y-6 p-8 rounded-3xl bg-[#191B20] border border-[#2D313A] shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-[#101113] border border-[#2D313A] flex items-center justify-center mx-auto text-[#D72B75]">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-[#D72B75]">
            404 &bull; Record Not Found
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#E8E2D7]">
            Dossier Not Found in Directory
          </h1>
          <p className="text-xs sm:text-sm text-[#9EA39F] leading-relaxed">
            The profile slug you requested does not correspond to a verified entry in our curated BRS legislative directory. Only audited profiles with authoritative election returns and official records are listed.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#101113] border border-[#262930] text-xs text-[#777B78] text-left space-y-1">
          <div className="font-semibold text-[#E8E2D7]">Available Verified Profiles:</div>
          <ul className="list-disc list-inside space-y-0.5 text-[#9EA39F]">
            <li>K.P. Vivekanand (MLA Quthbullapur — Flagship)</li>
            <li>K.T. Rama Rao (MLA Sircilla &amp; Working President)</li>
            <li>T. Harish Rao (MLA Siddipet &amp; Former Minister)</li>
            <li>K. Chandrashekar Rao (MLA Gajwel &amp; Founder President)</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/leaders"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-[#D72B75] text-white hover:bg-[#E34389] transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search Directory</span>
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-medium bg-[#101113] text-[#E8E2D7] hover:bg-[#16181C] border border-[#2D313A] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
