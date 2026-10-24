"use client";

import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  ChevronRight,
  X,
  Layers,
  MapPin,
  Info,
  ListFilter,
  Award
} from "lucide-react";
import { LeadershipRepository } from "@/lib/repository";

const PARTY_COLORS: Record<string, { fill: string; stroke: string; badgeBg: string; badgeText: string }> = {
  BRS: { fill: "#F7DCE9", stroke: "#D72B75", badgeBg: "#FFF1F7", badgeText: "#D72B75" },
  INC: { fill: "#E6F4EA", stroke: "#137333", badgeBg: "#E6F4EA", badgeText: "#137333" },
  BJP: { fill: "#FEF3C7", stroke: "#D97706", badgeBg: "#FFFBEB", badgeText: "#B45309" },
  AIMIM: { fill: "#E0E7FF", stroke: "#3B82F6", badgeBg: "#EFF6FF", badgeText: "#1D4ED8" },
  CPI: { fill: "#FEE2E2", stroke: "#DC2626", badgeBg: "#FEF2F2", badgeText: "#B91C1C" },
  OTH: { fill: "#F3F4F6", stroke: "#6B7280", badgeBg: "#F9FAFB", badgeText: "#4B5563" },
};

export default function ConstituencyMap() {
  const mapPaths = useMemo(() => LeadershipRepository.getMapPaths(), []);
  const allConstituencies = useMemo(() => LeadershipRepository.getAllConstituencies(), []);

  // State
  const [selectedAcNo, setSelectedAcNo] = useState<number | null>(45); // Default to Flagship Quthbullapur (45)
  const [hoveredAcNo, setHoveredAcNo] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedPartyFilter, setSelectedPartyFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"map" | "list">("map");

  // Zoom & Pan state (SVG viewBox: 0 0 900 850)
  const [viewBox, setViewBox] = useState({ x: 0, y: 0, w: 900, h: 850 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  // Get selected constituency data
  const selectedConstituency = useMemo(() => {
    if (!selectedAcNo) return null;
    return allConstituencies.find((c) => c.acNo === selectedAcNo) || null;
  }, [selectedAcNo, allConstituencies]);

  const hoveredConstituency = useMemo(() => {
    if (!hoveredAcNo) return null;
    return allConstituencies.find((c) => c.acNo === hoveredAcNo) || null;
  }, [hoveredAcNo, allConstituencies]);

  // Unique districts for filter
  const districts = useMemo(() => {
    const list = Array.from(new Set(allConstituencies.map((c) => c.district))).sort();
    return list;
  }, [allConstituencies]);

  // Filtered list for search dropdown and list view
  const searchResults = useMemo(() => {
    return allConstituencies.filter((c) => {
      if (selectedDistrict !== "all" && c.district.toLowerCase() !== selectedDistrict.toLowerCase()) {
        return false;
      }
      if (selectedPartyFilter !== "all" && c.partyAbbr !== selectedPartyFilter) {
        return false;
      }
      if (searchQuery.trim() === "") return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        c.constituencyName.toLowerCase().includes(q) ||
        c.mla.toLowerCase().includes(q) ||
        c.district.toLowerCase().includes(q) ||
        c.party.toLowerCase().includes(q) ||
        c.partyAbbr.toLowerCase().includes(q) ||
        c.acNo.toString() === q
      );
    });
  }, [allConstituencies, searchQuery, selectedDistrict, selectedPartyFilter]);

  // Reset view to full state
  const handleResetZoom = () => {
    setViewBox({ x: 0, y: 0, w: 900, h: 850 });
  };

  // Zoom In / Out
  const handleZoom = (factor: number) => {
    setViewBox((prev) => {
      const nw = Math.max(150, Math.min(1200, prev.w * factor));
      const nh = Math.max(140, Math.min(1150, prev.h * factor));
      const nx = prev.x + (prev.w - nw) / 2;
      const ny = prev.y + (prev.h - nh) / 2;
      return { x: nx, y: ny, w: nw, h: nh };
    });
  };

  // Zoom onto a specific constituency centroid
  const zoomToConstituency = (acNo: number) => {
    setSelectedAcNo(acNo);
    const target = mapPaths.find((p) => p.acNo === acNo);
    if (!target) return;
    const [cx, cy] = target.centroid;
    const zoomW = 300;
    const zoomH = 280;
    setViewBox({
      x: Math.max(0, Math.min(900 - zoomW, cx - zoomW / 2)),
      y: Math.max(0, Math.min(850 - zoomH, cy - zoomH / 2)),
      w: zoomW,
      h: zoomH,
    });
  };

  // Pan interactions
  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    if (e.button !== 0) return; // Left click only
    setIsPanning(true);
    setPanStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (isPanning) {
      const dx = (e.clientX - panStart.x) * (viewBox.w / 600);
      const dy = (e.clientY - panStart.y) * (viewBox.h / 550);
      setViewBox((prev) => ({
        ...prev,
        x: prev.x - dx,
        y: prev.y - dy,
      }));
      setPanStart({ x: e.clientX, y: e.clientY });
    }

    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  return (
    <div className="w-full bg-[#FFFCFE] border border-[#EDE3E9] rounded-2xl shadow-soft overflow-hidden" id="interactive-map-container">
      {/* Top Controls Toolbar */}
      <div className="p-4 sm:p-5 border-b border-[#EDE3E9] bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Section Header & Badges */}
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D72B75] animate-pulse" />
            <h3 className="font-display font-semibold text-lg text-[#28212A]">
              Interactive Telangana Assembly Constituency Map
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-[#FFF1F7] text-[#D72B75] border border-[#F7DCE9] text-xs font-semibold">
              119 Constituencies
            </span>
          </div>
          <p className="text-xs text-[#756D78] mt-0.5">
            Geometrically accurate delimitation boundaries. Click any constituency polygon to view its elected representative and verified election record.
          </p>
        </div>

        {/* Right: View Mode Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            id="map-view-toggle-map"
            onClick={() => setViewMode("map")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === "map"
                ? "bg-[#D72B75] text-white shadow-2xs"
                : "bg-white text-[#756D78] border border-[#EDE3E9] hover:bg-[#FFF8F8]"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Map View</span>
          </button>
          <button
            type="button"
            id="map-view-toggle-list"
            onClick={() => setViewMode("list")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === "list"
                ? "bg-[#D72B75] text-white shadow-2xs"
                : "bg-white text-[#756D78] border border-[#EDE3E9] hover:bg-[#FFF8F8]"
            }`}
          >
            <ListFilter className="w-3.5 h-3.5" />
            <span>Accessible List</span>
          </button>
        </div>
      </div>

      {/* Filter and Quick Selector Bar */}
      <div className="px-4 py-3 bg-[#FFF8F8] border-b border-[#EDE3E9] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2 flex-1 min-w-[280px]">
          {/* Search box with auto-suggest */}
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="w-3.5 h-3.5 text-[#756D78] absolute left-3 top-2.5" />
            <input
              type="text"
              id="map-constituency-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by constituency, MLA, or district..."
              className="w-full pl-8 pr-7 py-1.5 rounded-xl bg-white border border-[#EDE3E9] text-xs text-[#28212A] placeholder:text-[#9B959F] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-2.5 text-[#756D78] hover:text-[#28212A]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* District selector dropdown */}
          <select
            id="map-district-filter-select"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="px-2.5 py-1.5 rounded-xl bg-white border border-[#EDE3E9] text-xs text-[#28212A] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
          >
            <option value="all">All Districts (33)</option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          {/* Party filter selector */}
          <select
            id="map-party-filter-select"
            value={selectedPartyFilter}
            onChange={(e) => setSelectedPartyFilter(e.target.value)}
            className="px-2.5 py-1.5 rounded-xl bg-white border border-[#EDE3E9] text-xs text-[#28212A] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
          >
            <option value="all">All Parties</option>
            <option value="BRS">BRS (39 seats)</option>
            <option value="INC">INC (64 seats)</option>
            <option value="BJP">BJP (8 seats)</option>
            <option value="AIMIM">AIMIM (7 seats)</option>
            <option value="CPI">CPI (1 seat)</option>
          </select>
        </div>

        {/* Quick jump pills to featured constituencies */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-[#756D78] font-medium hidden sm:inline">Jump to:</span>
          <button
            type="button"
            id="quick-jump-quthbullapur"
            onClick={() => zoomToConstituency(45)}
            className={`px-2.5 py-1 rounded-lg font-semibold text-[11px] transition-all flex items-center gap-1 ${
              selectedAcNo === 45
                ? "bg-[#D72B75] text-white shadow-2xs"
                : "bg-white text-[#D72B75] border border-[#F7DCE9] hover:bg-[#FFF1F7]"
            }`}
          >
            <Award className="w-3 h-3" />
            <span>Quthbullapur (Flagship)</span>
          </button>
          <button
            type="button"
            onClick={() => zoomToConstituency(29)}
            className="px-2 py-1 rounded-lg font-medium text-[11px] bg-white text-[#28212A] border border-[#EDE3E9] hover:bg-[#FFF1F7]"
          >
            Sircilla (KTR)
          </button>
          <button
            type="button"
            onClick={() => zoomToConstituency(28)}
            className="px-2 py-1 rounded-lg font-medium text-[11px] bg-white text-[#28212A] border border-[#EDE3E9] hover:bg-[#FFF1F7]"
          >
            Siddipet (Harish)
          </button>
          <button
            type="button"
            onClick={() => zoomToConstituency(39)}
            className="px-2 py-1 rounded-lg font-medium text-[11px] bg-white text-[#28212A] border border-[#EDE3E9] hover:bg-[#FFF1F7]"
          >
            Gajwel (KCR)
          </button>
          <button
            type="button"
            onClick={() => zoomToConstituency(71)}
            className="px-2 py-1 rounded-lg font-medium text-[11px] bg-white text-[#28212A] border border-[#EDE3E9] hover:bg-[#FFF1F7]"
          >
            Kodangal (Revanth)
          </button>
        </div>
      </div>

      {/* Main Map Body or List View */}
      {viewMode === "map" ? (
        <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[580px] bg-[#FFFCFE]">
          {/* SVG Map Canvas: 8 cols on desktop */}
          <div className="lg:col-span-8 relative overflow-hidden bg-[#FFFCFE] flex items-center justify-center p-2 sm:p-4 select-none">
            {/* Zoom / Pan Controls Overlay */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5 bg-white/90 backdrop-blur-md p-1.5 rounded-xl border border-[#EDE3E9] shadow-soft">
              <button
                type="button"
                id="map-zoom-in-btn"
                onClick={() => handleZoom(0.75)}
                className="p-1.5 rounded-lg text-[#28212A] hover:bg-[#FFF1F7] hover:text-[#D72B75] transition-colors"
                title="Zoom in"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                id="map-zoom-out-btn"
                onClick={() => handleZoom(1.33)}
                className="p-1.5 rounded-lg text-[#28212A] hover:bg-[#FFF1F7] hover:text-[#D72B75] transition-colors"
                title="Zoom out"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                type="button"
                id="map-reset-zoom-btn"
                onClick={handleResetZoom}
                className="p-1.5 rounded-lg text-[#28212A] hover:bg-[#FFF1F7] hover:text-[#D72B75] transition-colors"
                title="Reset zoom to full Telangana"
                aria-label="Reset zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Legend Overlay at bottom-left */}
            <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-[#EDE3E9] shadow-soft text-[11px] space-y-1">
              <span className="font-semibold text-[#28212A] block text-[10px] uppercase tracking-wider">
                Party Representation (2023)
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#756D78]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#D72B75]" />
                  <span>BRS (39)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#137333]" />
                  <span>INC (64)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#D97706]" />
                  <span>BJP (8)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#3B82F6]" />
                  <span>AIMIM (7)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#DC2626]" />
                  <span>CPI (1)</span>
                </div>
              </div>
            </div>

            {/* Interactive SVG */}
            <svg
              ref={svgRef}
              viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`}
              className="w-full h-[520px] sm:h-[620px] transition-transform duration-75 cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              aria-label="Interactive map of Telangana Assembly Constituencies"
            >
              <defs>
                <filter id="glow-flagship" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D72B75" floodOpacity="0.5" />
                </filter>
                <filter id="glow-hover" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#28212A" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Constituency Polygons */}
              <g id="constituency-polygons-group">
                {mapPaths.map((cp) => {
                  const isSelected = selectedAcNo === cp.acNo;
                  const isHovered = hoveredAcNo === cp.acNo;
                  const isFlagship = cp.isFlagship;
                  const partyColor = PARTY_COLORS[cp.partyAbbr] || PARTY_COLORS.OTH;

                  // Apply search highlight or dim
                  const isMatchedByFilter = searchResults.some((sr) => sr.acNo === cp.acNo);
                  const opacity = isMatchedByFilter ? 1 : 0.25;

                  return (
                    <path
                      key={cp.acNo}
                      id={`constituency-polygon-${cp.acNo}`}
                      d={cp.svgPath}
                      fill={
                        isSelected
                          ? "#D72B75"
                          : isHovered
                          ? "#F7DCE9"
                          : isFlagship
                          ? "#F7DCE9"
                          : partyColor.fill
                      }
                      stroke={
                        isSelected
                          ? "#28212A"
                          : isHovered
                          ? "#D72B75"
                          : isFlagship
                          ? "#D72B75"
                          : partyColor.stroke
                      }
                      strokeWidth={isSelected ? 2.5 : isHovered ? 2 : isFlagship ? 1.8 : 0.8}
                      opacity={opacity}
                      className="ac-polygon"
                      filter={isSelected ? "url(#glow-flagship)" : isHovered ? "url(#glow-hover)" : undefined}
                      onMouseEnter={() => setHoveredAcNo(cp.acNo)}
                      onMouseLeave={() => setHoveredAcNo(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        zoomToConstituency(cp.acNo);
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`${cp.acName} Assembly constituency, represented by ${cp.mla} (${cp.partyAbbr})`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          zoomToConstituency(cp.acNo);
                        }
                      }}
                    />
                  );
                })}
              </g>

              {/* Marker pin on selected constituency */}
              {selectedAcNo && (() => {
                const sp = mapPaths.find((p) => p.acNo === selectedAcNo);
                if (!sp) return null;
                const [cx, cy] = sp.centroid;
                return (
                  <g transform={`translate(${cx}, ${cy})`} pointerEvents="none" className="transition-transform duration-200">
                    <circle r="6" fill="#D72B75" opacity="0.3" className="animate-ping" />
                    <circle r="4" fill="#D72B75" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text
                      y="-8"
                      textAnchor="middle"
                      fill="#28212A"
                      fontSize="9"
                      fontWeight="bold"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      paintOrder="stroke"
                    >
                      {sp.acName}
                    </text>
                  </g>
                );
              })()}
            </svg>

            {/* Hover Tooltip Overlay */}
            {hoveredConstituency && tooltipPos && (
              <div
                style={{
                  left: Math.min(tooltipPos.x + 12, 450),
                  top: Math.max(tooltipPos.y - 45, 10),
                }}
                className="absolute z-30 pointer-events-none bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-[#EDE3E9] shadow-lg text-xs min-w-[200px] animate-in fade-in zoom-in-95 duration-100"
              >
                <div className="flex items-center justify-between gap-2 border-b border-[#EDE3E9] pb-1 mb-1">
                  <span className="font-display font-semibold text-[#28212A]">
                    {hoveredConstituency.constituencyName}
                  </span>
                  <span className="text-[10px] text-[#756D78]">
                    AC #{hoveredConstituency.acNo}
                  </span>
                </div>
                <div className="text-[11px] space-y-0.5">
                  <p className="text-[#28212A] font-medium flex items-center gap-1">
                    <span>MLA:</span>
                    <strong className="text-[#D72B75]">{hoveredConstituency.mla}</strong>
                  </p>
                  <p className="text-[#756D78] text-[10px] flex items-center justify-between">
                    <span>District: {hoveredConstituency.district}</span>
                    <span className="font-semibold text-[#28212A]">{hoveredConstituency.partyAbbr}</span>
                  </p>
                  <p className="text-[10px] text-[#756D78] italic pt-0.5">
                    Click to view representative &amp; election record &rarr;
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Detail Panel: 4 cols on desktop */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#EDE3E9] bg-white p-5 flex flex-col justify-between" id="constituency-detail-panel">
            {selectedConstituency ? (
              <div className="space-y-5">
                {/* Panel Header */}
                <div className="flex items-start justify-between gap-3 border-b border-[#EDE3E9] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-[#A51D55] uppercase tracking-wider">
                        Telangana Assembly Segment
                      </span>
                      {selectedConstituency.isFlagship && (
                        <span className="px-2 py-0.5 rounded-full bg-[#D72B75] text-white text-[10px] font-bold">
                          Flagship Profile
                        </span>
                      )}
                    </div>
                    <h4 className="font-display text-2xl font-bold text-[#28212A] mt-1">
                      {selectedConstituency.constituencyName}
                    </h4>
                    <p className="text-xs text-[#756D78] flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D72B75]" />
                      <span>{selectedConstituency.district} District</span>
                      <span>&bull;</span>
                      <span>AC #{selectedConstituency.acNo}</span>
                    </p>
                  </div>
                </div>

                {/* Representative Card */}
                <div className="p-4 rounded-xl bg-[#FFF1F7]/60 border border-[#F7DCE9] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#756D78] uppercase tracking-wider">
                      Current Representative (3rd Assembly)
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                      style={{
                        backgroundColor: (PARTY_COLORS[selectedConstituency.partyAbbr] || PARTY_COLORS.OTH).badgeBg,
                        color: (PARTY_COLORS[selectedConstituency.partyAbbr] || PARTY_COLORS.OTH).badgeText,
                      }}
                    >
                      {selectedConstituency.partyAbbr}
                    </span>
                  </div>

                  <div>
                    <h5 className="font-display text-lg font-bold text-[#28212A]">
                      {selectedConstituency.mla}
                    </h5>
                    <p className="text-xs text-[#756D78] mt-0.5">
                      {selectedConstituency.party}
                    </p>
                  </div>

                  {/* 2023 Election Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#F7DCE9] text-xs">
                    <div className="bg-white p-2 rounded-lg border border-[#EDE3E9]">
                      <span className="text-[10px] text-[#756D78] block">Votes Polled</span>
                      <strong className="text-[#28212A] font-semibold text-sm">
                        {selectedConstituency.votes}
                      </strong>
                      <span className="text-[10px] text-[#756D78] block">
                        {selectedConstituency.voteShare} share
                      </span>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-[#EDE3E9]">
                      <span className="text-[10px] text-[#756D78] block">Victory Margin</span>
                      <strong className="text-[#D72B75] font-semibold text-sm">
                        {selectedConstituency.margin}
                      </strong>
                      <span className="text-[10px] text-[#756D78] block">Votes</span>
                    </div>
                  </div>

                  {/* Runner-up Details */}
                  {selectedConstituency.runnerUp && (
                    <div className="text-[11px] pt-1 text-[#756D78] border-t border-[#F7DCE9]/80">
                      <span className="font-medium text-[#28212A]">Runner-up: </span>
                      {selectedConstituency.runnerUp.name} ({selectedConstituency.runnerUp.partyAbbr}) &bull;{" "}
                      {selectedConstituency.runnerUp.votes} votes ({selectedConstituency.runnerUp.voteShare})
                    </div>
                  )}
                </div>

                {/* Primary CTA Button */}
                {selectedConstituency.profileSlug ? (
                  <Link
                    href={`/leaders/${selectedConstituency.profileSlug}`}
                    id="map-detail-view-profile-cta"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white hover:opacity-95 shadow-md shadow-[#D72B75]/20 hover:-translate-y-0.5 transition-all text-center"
                  >
                    <Award className="w-4 h-4" />
                    <span>View Comprehensive Public Profile</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <div className="p-3 rounded-xl bg-gray-50 border border-[#EDE3E9] text-xs text-[#756D78]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#28212A] mb-1">
                      <Info className="w-3.5 h-3.5 text-[#D72B75]" />
                      <span>Verified Statistical Summary</span>
                    </div>
                    <span>
                      Data authenticated via Election Commission of India Statistical Report 2023. Individual deep-dive portfolio pending ongoing public verification.
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-[#756D78] text-xs">
                <MapPin className="w-8 h-8 text-[#EDE3E9] mx-auto mb-2" />
                <span>Select a constituency on the map or search above to view its representative and public record.</span>
              </div>
            )}

            {/* Bottom Methodology Note */}
            <div className="pt-4 border-t border-[#EDE3E9] text-[11px] text-[#756D78] flex items-center justify-between">
              <span>Source: ECI Statistical Report 2023</span>
              <Link href="/about" className="text-[#D72B75] hover:underline flex items-center gap-1">
                <span>Methodology</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* Accessible List View */
        <div className="p-4 sm:p-6 bg-white space-y-4" id="accessible-constituency-list">
          <div className="flex items-center justify-between text-xs text-[#756D78]">
            <span>Showing {searchResults.length} of 119 constituencies</span>
            <span>Sorted by AC Number</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {searchResults.map((c) => (
              <div
                key={c.acNo}
                className={`p-4 rounded-xl border transition-all ${
                  selectedAcNo === c.acNo
                    ? "border-[#D72B75] bg-[#FFF1F7]/40 shadow-soft"
                    : "border-[#EDE3E9] bg-white hover:border-[#D72B75]/40"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-[#756D78] block">AC #{c.acNo} &bull; {c.district}</span>
                    <h5 className="font-display font-semibold text-base text-[#28212A]">
                      {c.constituencyName}
                    </h5>
                  </div>
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                    style={{
                      backgroundColor: (PARTY_COLORS[c.partyAbbr] || PARTY_COLORS.OTH).badgeBg,
                      color: (PARTY_COLORS[c.partyAbbr] || PARTY_COLORS.OTH).badgeText,
                    }}
                  >
                    {c.partyAbbr}
                  </span>
                </div>

                <div className="mt-2 text-xs text-[#28212A]">
                  <span className="text-[#756D78]">MLA: </span>
                  <strong>{c.mla}</strong>
                </div>

                <div className="mt-2 pt-2 border-t border-[#EDE3E9] flex items-center justify-between text-[11px] text-[#756D78]">
                  <span>Margin: <strong className="text-[#28212A]">{c.margin}</strong> votes</span>
                  {c.profileSlug ? (
                    <Link
                      href={`/leaders/${c.profileSlug}`}
                      className="text-[#D72B75] hover:text-[#A51D55] font-semibold flex items-center gap-0.5"
                    >
                      <span>Profile</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedAcNo(c.acNo);
                        setViewMode("map");
                        zoomToConstituency(c.acNo);
                      }}
                      className="text-[#D72B75] hover:underline"
                    >
                      Show on Map
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dataset Provenance Footer Disclosure */}
      <div className="px-4 py-3 bg-[#FFF1F7]/70 border-t border-[#EDE3E9] text-[11px] text-[#756D78] flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-[#D72B75] shrink-0" />
          <span>
            <strong>Data Provenance:</strong> Real constituency polygon boundaries sourced from Election Commission of India Delimitation spatial datasets via the open GIS community (DataMeet). All 119 Assembly segments are geometrically mapped.
          </span>
        </div>
        <Link
          href="/about"
          className="text-[#D72B75] hover:text-[#A51D55] font-medium whitespace-nowrap"
        >
          Verification Standards &rarr;
        </Link>
      </div>
    </div>
  );
}
