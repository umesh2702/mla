"use client";

import { useEffect, useState, useMemo } from "react";
import { User, Award, MapPin, Building, Clock, Phone, BookOpen } from "lucide-react";

interface ProfileNavProps {
  hasProjects?: boolean;
  hasConstituency?: boolean;
}

export default function ProfileNav({ hasProjects = true, hasConstituency = true }: ProfileNavProps) {
  const [activeSection, setActiveSection] = useState<string>("biography");

  const navItems = useMemo(
    () => [
      { id: "biography", label: "Biography", icon: User },
      { id: "elections", label: "Electoral Record", icon: Award },
      ...(hasConstituency ? [{ id: "constituency", label: "Constituency Context", icon: MapPin }] : []),
      ...(hasProjects ? [{ id: "projects", label: "Civic Projects", icon: Building }] : []),
      { id: "timeline", label: "Legislative Timeline", icon: Clock },
      { id: "contact", label: "Public Offices", icon: Phone },
      { id: "sources", label: "Audited Sources", icon: BookOpen },
    ],
    [hasProjects, hasConstituency]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
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
    <div className="sticky top-18 z-30 w-full bg-[#101113]/95 backdrop-blur-md border-b border-[#262930] py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-1 text-xs" aria-label="Profile Sections">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all font-medium ${
                  isActive
                    ? "bg-[#D72B75] text-white shadow-sm"
                    : "bg-[#191B20] text-[#9EA39F] hover:text-[#E8E2D7] hover:bg-[#22252C] border border-[#2D313A]"
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
