"use client";

import { useEffect, useState, useMemo } from "react";
import { User, Award, MapPin, Building, Clock, BookOpen, Activity, Compass, Sparkles, Building2 } from "lucide-react";

interface ProfileNavProps {
  hasProjects?: boolean;
  hasConstituency?: boolean;
  isFlagship?: boolean;
}

export default function ProfileNav({
  hasProjects = true,
  hasConstituency = true,
  isFlagship = false,
}: ProfileNavProps) {
  const [activeSection, setActiveSection] = useState<string>(isFlagship ? "decade-transformation" : "biography");

  const navItems = useMemo(() => {
    if (isFlagship) {
      return [
        { id: "decade-transformation", label: "2014-2024 Transformation", icon: Activity },
        { id: "pillars", label: "Infrastructure Pillars", icon: Compass },
        { id: "youth-skills", label: "Youth & Skills Corridor", icon: Sparkles },
        { id: "biography", label: "Biography", icon: User },
        { id: "elections", label: "Electoral Mandates", icon: Award },
        { id: "constituency", label: "Quthbullapur Landscape", icon: MapPin },
        { id: "projects", label: "Audited Projects", icon: Building },
        { id: "assembly-voice", label: "Assembly & Outreach", icon: Clock },
        { id: "grievance-desk", label: "Praja Darbar Desk", icon: Building2 },
        { id: "sources", label: "Sources", icon: BookOpen },
      ];
    }

    return [
      { id: "biography", label: "Biography", icon: User },
      { id: "elections", label: "Electoral Record", icon: Award },
      ...(hasConstituency ? [{ id: "constituency", label: "Constituency Context", icon: MapPin }] : []),
      ...(hasProjects ? [{ id: "projects", label: "Civic Projects", icon: Building }] : []),
      { id: "timeline", label: "Legislative Timeline", icon: Clock },
      { id: "contact", label: "Public Offices", icon: Building2 },
      { id: "sources", label: "Audited Sources", icon: BookOpen },
    ];
  }, [hasProjects, hasConstituency, isFlagship]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <div className="sticky top-20 z-30 w-full bg-white/95 backdrop-blur-md border-b border-[#F0E4EA] py-2.5 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 text-xs" aria-label="Profile Sections">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all font-semibold ${
                  isActive
                    ? "bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white shadow-xs"
                    : "bg-[#FFF8F8] text-[#77717B] hover:text-[#24212A] hover:bg-[#FCE7F0]/60 border border-[#F0E4EA]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
