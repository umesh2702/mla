import Link from "next/link";
import { Search, AlertCircle, Home } from "lucide-react";

export const metadata = {
  title: "Profile Not Found | BRS Leadership Platform",
  description: "The requested leadership profile or legislative dossier could not be located in our verified directory.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFCFD]">
      <div className="max-w-lg w-full text-center space-y-6 p-8 sm:p-10 rounded-3xl bg-white border border-[#F0E4EA] shadow-card-hover">
        <div className="w-16 h-16 rounded-2xl bg-[#FCE7F0] border border-[#F8D7E5] flex items-center justify-center mx-auto text-[#A51D55] shadow-2xs">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-extrabold tracking-wider text-[#A51D55] bg-[#FCE7F0] px-3 py-1 rounded-full">
            404 • Record Not Found
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#24212A] pt-1">
            Dossier Not Found in Directory
          </h1>
          <p className="text-xs sm:text-sm text-[#77717B] leading-relaxed">
            The profile slug you requested does not correspond to a verified entry in our curated BRS legislative directory. Only audited profiles with authoritative election returns and official records are listed.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] text-xs text-[#77717B] text-left space-y-1.5">
          <div className="font-bold text-[#24212A]">Available Verified Profiles:</div>
          <ul className="list-disc list-inside space-y-1 text-[#24212A]">
            <li>K.P. Vivekanand (MLA Quthbullapur — Flagship)</li>
            <li>K.T. Rama Rao (MLA Sircilla &amp; Working President)</li>
            <li>T. Harish Rao (MLA Siddipet &amp; Former Minister)</li>
            <li>K. Chandrashekar Rao (MLA Gajwel &amp; Founder President)</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/leaders"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white shadow-xs hover:opacity-95 transition-all"
          >
            <Search className="w-4 h-4" />
            <span>Search Directory</span>
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs font-semibold bg-[#FFF8F8] text-[#24212A] hover:bg-white border border-[#F0E4EA] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
