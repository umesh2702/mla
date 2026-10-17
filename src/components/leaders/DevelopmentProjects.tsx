"use client";

import { useState, useMemo } from "react";
import { DevelopmentProject } from "@/types/project";
import StatusPill from "@/components/ui/StatusPill";
import SourceLink from "@/components/ui/SourceLink";
import {
  Search,
  MapPin,
  ShieldCheck,
  UserCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface DevelopmentProjectsProps {
  projects: DevelopmentProject[];
}

export default function DevelopmentProjects({ projects }: DevelopmentProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (selectedCategory !== "all" && p.category !== selectedCategory) return false;
      if (selectedStatus !== "all" && p.status !== selectedStatus) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        p.name.toLowerCase().includes(q) ||
        p.locality.toLowerCase().includes(q) ||
        p.responsibleAuthority.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    });
  }, [projects, selectedCategory, selectedStatus, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-16 border-b border-[#F0E4EA] bg-[#FFF8F8] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55] bg-[#FCE7F0] px-3 py-1 rounded-full">
                Civic Works &amp; Infrastructure Oversight
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#24212A]">
              Audited Development Projects ({projects.length})
            </h2>
          </div>
          <p className="text-xs text-[#77717B] max-w-md font-medium">
            Projects audited with verifiable administrative sanctions, designated executing authorities, and explicit evidence of legislative role.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="p-5 rounded-3xl bg-white border border-[#F0E4EA] shadow-soft space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#77717B]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter projects by name, locality (e.g. Jeedimetla), or authority..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] text-xs text-[#24212A] placeholder-[#77717B] focus:outline-none focus:ring-2 focus:ring-[#D72B75] focus:bg-white transition-all"
              />
            </div>

            {/* Status Select */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="py-2.5 px-4 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] text-xs text-[#24212A] font-semibold focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
            >
              <option value="all">All Execution Statuses</option>
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
              <option value="approved">Approved</option>
              <option value="delayed">Delayed</option>
              <option value="proposed">Proposed</option>
            </select>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-[#77717B] text-[11px] font-semibold mr-1 shrink-0">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all font-semibold capitalize text-xs ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white shadow-2xs"
                    : "bg-[#FFF8F8] text-[#77717B] hover:text-[#24212A] hover:bg-[#FCE7F0]/60 border border-[#F0E4EA]"
                }`}
              >
                {cat === "all" ? "All Categories" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedCardId === project.id;
            return (
              <div
                key={project.id}
                className="p-7 rounded-3xl bg-white border border-[#F0E4EA] shadow-soft flex flex-col justify-between space-y-4 hover:shadow-card-hover transition-all"
              >
                <div className="space-y-3.5">
                  {/* Status & Category Badge */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <StatusPill status={project.status} />
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#FCE7F0] text-[#A51D55] border border-[#F8D7E5]">
                      {project.category}
                    </span>
                  </div>

                  {/* Name and Locality */}
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#24212A] leading-snug">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#D72B75] mt-1 font-semibold">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.locality}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#77717B] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Status detail notes if available */}
                  {project.statusDetail && (
                    <div className="text-xs text-[#77717B] p-3 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] italic">
                      <strong className="text-[#24212A] not-italic font-semibold">Execution Note:</strong> {project.statusDetail}
                    </div>
                  )}

                  {/* Key Metadata Table */}
                  <div className="pt-2 border-t border-[#F0E4EA] grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA]/60">
                      <div className="text-[10px] text-[#77717B] uppercase font-bold">Executing Agency</div>
                      <div className="text-[#24212A] font-semibold mt-0.5 truncate" title={project.responsibleAuthority}>
                        {project.responsibleAuthority}
                      </div>
                    </div>
                    {project.sanctionedCost && (
                      <div className="p-3 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA]/60">
                        <div className="text-[10px] text-[#77717B] uppercase font-bold">Sanctioned Outlay</div>
                        <div className="text-[#24212A] font-semibold mt-0.5 truncate">
                          {project.sanctionedCost}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Explicit MLA Involvement Section */}
                  <div className="p-3.5 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#A51D55] uppercase tracking-wider">
                      <UserCheck className="w-3.5 h-3.5 text-[#D72B75]" />
                      <span>Documented Legislative Role</span>
                    </div>
                    <p className="text-xs text-[#77717B] leading-relaxed">
                      {project.mlaRoleDescription}
                    </p>
                  </div>
                </div>

                {/* Sources & Verification Footer */}
                <div className="pt-4 border-t border-[#F0E4EA] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#77717B] font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{project.verificationMetadata.status}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="text-[11px] text-[#D72B75] hover:text-[#A51D55] font-bold flex items-center gap-1"
                    >
                      <span>{isExpanded ? "Hide Citations" : "View Citations"}</span>
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pt-2 space-y-2 animate-in fade-in duration-150">
                      <div className="text-[10px] text-[#77717B] uppercase font-bold">Primary Sources</div>
                      {project.sources.map((s, sIdx) => (
                        <SourceLink
                          key={sIdx}
                          title={s.title}
                          publisher={s.publisher}
                          url={s.url}
                          className="w-full"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
