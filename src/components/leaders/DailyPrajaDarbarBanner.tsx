import { Clock, MapPin, PhoneCall, Users, ShieldAlert } from "lucide-react";

export default function DailyPrajaDarbarBanner() {
  return (
    <div className="bg-gradient-to-r from-[#24212A] via-[#332230] to-[#24212A] text-white py-2.5 px-4 border-b border-[#D72B75]/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        {/* Left: Camp Office Hours */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D72B75] text-[11px] font-bold uppercase tracking-wider text-white shadow-xs">
            <Clock className="w-3 h-3" />
            Daily Praja Darbar
          </span>
          <span className="font-semibold text-rose-100">
            09:00 AM – 11:30 AM
          </span>
          <span className="text-white/40 hidden sm:inline">&bull;</span>
          <span className="flex items-center gap-1 text-white/80">
            <MapPin className="w-3.5 h-3.5 text-[#D72B75]" />
            Camp Office, Beside Suchitra Circle, NH-44
          </span>
        </div>

        {/* Right: Quick Help & Citizen Metrics */}
        <div className="flex items-center gap-4 text-[11px] text-white/80">
          <div className="hidden lg:flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#D72B75]" />
            <span>700,000+ Citizens Represented</span>
          </div>
          <span className="text-white/30 hidden lg:inline">|</span>
          <a
            href="tel:18004253300"
            className="inline-flex items-center gap-1.5 text-rose-200 hover:text-white font-semibold transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-[#D72B75]" />
            <span>Helpline: 1800 425 3300</span>
          </a>
          <span className="text-white/30">|</span>
          <span className="inline-flex items-center gap-1 text-amber-300 font-medium">
            <ShieldAlert className="w-3 h-3" />
            <span>Civic Prototype</span>
          </span>
        </div>
      </div>
    </div>
  );
}
