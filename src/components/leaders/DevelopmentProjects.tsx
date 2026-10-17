"use client";

import { useState, useMemo } from "react";
import { DevelopmentProject } from "@/types/project";
import StatusPill from "@/components/ui/StatusPill";
import SourceLink from "@/components/ui/SourceLink";
import {
  Building,
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
    <section id="projects" className="py-12 border-b border-[#262930] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Building className="w-5 h-5 text-[#D72B75]" />
              <span className="text-xs uppercase font-bold tracking-wider text-[#D72B75]">
                Civic Works &amp; Infrastructure Oversight
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#E8E2D7]">
              Audited Development Projects ({projects.length})
            </h2>
          </div>
          <p className="text-xs text-[#777B78] max-w-md">
            Projects audited with verifiable administrative sanctions, designated executing authorities, and explicit evidence of legislative role.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#191B20] border border-[#2D313A] space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777B78]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter projects by name, locality (e.g. Jeedimetla), or authority..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#101113] border border-[#2D313A] text-xs text-[#E8E2D7] placeholder-[#777B78] focus:outline-none focus:ring-1 focus:ring-[#D72B75]"
              />
            </div>

            {/* Status Select */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="py-2 px-3 rounded-xl bg-[#101113] border border-[#2D313A] text-xs text-[#E8E2D7] focus:outline-none focus:ring-1 focus:ring-[#D72B75]"
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
            <span className="text-[#777B78] text-[11px] font-medium mr-1 shrink-0">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg whitespace-nowrap transition-colors font-medium capitalize text-xs ${
                  selectedCategory === cat
                    ? "bg-[#D72B75] text-white"
                    : "bg-[#101113] text-[#9EA39F] hover:text-[#E8E2D7] border border-[#262930]"
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
                className="p-6 rounded-2xl bg-[#191B20] border border-[#2D313A] shadow-md flex flex-col justify-between space-y-4 hover:border-[#D72B75]/40 transition-colors"
              >
                <div className="space-y-3">
                  {/* Status & Category Badge */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <StatusPill status={project.status} />
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#101113] text-[#9EA39F] border border-[#2D313A]">
                      {project.category}
                    </span>
                  </div>

                  {/* Name and Locality */}
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#E8E2D7] leading-snug">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#D72B75] mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.locality}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#9EA39F] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Status detail notes if available */}
                  {project.statusDetail && (
                    <div className="text-xs text-[#777B78] p-2.5 rounded-lg bg-[#14161A] border border-[#262930] italic">
                      <strong className="text-[#9EA39F] not-italic">Execution Note:</strong> {project.statusDetail}
                    </div>
                  )}

                  {/* Key Metadata Table */}
                  <div className="pt-2 border-t border-[#262930] grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-[#101113]">
                      <div className="text-[10px] text-[#777B78] uppercase font-bold">Executing Agency</div>
                      <div className="text-[#E8E2D7] font-medium mt-0.5 truncate" title={project.responsibleAuthority}>
                        {project.responsibleAuthority}
                      </div>
                    </div>
                    {project.sanctionedCost && (
                      <div className="p-2 rounded-lg bg-[#101113]">
                        <div className="text-[10px] text-[#777B78] uppercase font-bold">Sanctioned Outlay</div>
                        <div className="text-[#E8E2D7] font-medium mt-0.5 truncate">
                          {project.sanctionedCost}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Explicit MLA Involvement Section */}
                  <div className="p-3 rounded-xl bg-[#16181C] border border-[#262930] space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#D72B75] uppercase tracking-wider">
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>Documented Legislative Role</span>
                    </div>
                    <p className="text-xs text-[#9EA39F] leading-relaxed">
                      {project.mlaRoleDescription}
                    </p>
                  </div>
                </div>

                {/* Sources & Verification Footer */}
                <div className="pt-4 border-t border-[#262930] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] text-[#777B78] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{project.verificationMetadata.status}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="text-[11px] text-[#D72B75] hover:text-[#E34389] font-medium flex items-center gap-1"
                    >
                      <span>{isExpanded ? "Hide Citations" : "View Citations"}</span>
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pt-2 space-y-1.5 animate-in fade-in duration-150">
                      <div className="text-[10px] text-[#777B78] uppercase font-bold">Primary Sources</div>
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
