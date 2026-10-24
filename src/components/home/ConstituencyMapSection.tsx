"use client";

import { useState } from "react";
import Link from "next/link";
import { MLC_CONSTITUENCIES } from "@/data/graduate-mlc";
import { MlcConstituency } from "@/types/mlc";

interface ConstituencyMapSectionProps {
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export default function ConstituencyMapSection({
  selectedId: propSelectedId,
  onSelect,
}: ConstituencyMapSectionProps) {
  const [internalSelectedId, setInternalSelectedId] = useState<string>("mrh");

  const currentId = propSelectedId || internalSelectedId;
  const currentConstituency: MlcConstituency =
    MLC_CONSTITUENCIES.find((c) => c.id === currentId) || MLC_CONSTITUENCIES[0];

  const handleSelect = (id: string) => {
    setInternalSelectedId(id);
    if (onSelect) {
      onSelect(id);
    }
  };

  return (
    <section className="w-full mb-16 scroll-mt-24" id="constituencies">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-xs bg-[#E6007E]"></span>
            <span className="text-[11px] font-bold text-[#E6007E] uppercase tracking-widest font-display">
              Interactive Delimitation &amp; Legislative Zones
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl text-[#0B1C30] font-bold tracking-tight">
            Graduate MLC Constituencies
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#565E74] max-w-md leading-relaxed">
          Select a constituency block or toggle map zones below to view boundary profiles, incumbent credentials, and statutory 2027 renewal cycles.
        </p>
      </div>

      {/* Bento Grid: Left Schematic Map + Right Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left: Schematic SVG Map & Switcher */}
        <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
          {/* Header Row inside Card */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F1F5F9]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#E6007E] text-[20px]">
                layers
              </span>
              <span className="font-display font-bold text-sm sm:text-base text-[#0B1C30]">
                Telangana Regional Delimitation
              </span>
            </div>
            {/* Visual Legend */}
            <div className="flex items-center gap-3 text-[11px] font-bold text-[#565E74] uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E6007E]"></span>
                <span className="text-[#0B1C30]">2 Active 2027</span>
              </div>
              <span>&bull;</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#565E74]"></span>
                <span>1 Future Cycle</span>
              </div>
            </div>
          </div>

          {/* Interactive Schematic SVG Map Graphic */}
          <div className="relative w-full aspect-[4/3] bg-[#EFF4FF] rounded-xl sm:rounded-2xl p-4 flex items-center justify-center overflow-hidden border border-[#E2E8F0]">
            <svg
              className="w-full h-full max-h-[380px] drop-shadow-xs select-none"
              fill="none"
              viewBox="0 0 540 440"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Schematic regional map of Telangana Graduate MLC constituencies"
            >
              <defs>
                <filter id="glowMagenta" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#E6007E" floodOpacity="0.4" />
                </filter>
              </defs>

              {/* Background Coordinate Grid */}
              <path
                d="M40 0 V440 M120 0 V440 M200 0 V440 M280 0 V440 M360 0 V440 M440 0 V440 M520 0 V440"
                stroke="#D3E4FE"
                strokeDasharray="2 4"
                strokeWidth="0.5"
              />
              <path
                d="M0 60 H540 M0 140 H540 M0 220 H540 M0 300 H540 M0 380 H540"
                stroke="#D3E4FE"
                strokeDasharray="2 4"
                strokeWidth="0.5"
              />

              {/* ZONE 1 (North): Adilabad–Nizamabad–Medak–Karimnagar (Future Cycle) */}
              <g
                tabIndex={0}
                role="button"
                aria-label="Select Adilabad-Nizamabad-Medak-Karimnagar constituency"
                onClick={() => handleSelect("anmk")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleSelect("anmk");
                }}
                className="cursor-pointer focus:outline-none"
              >
                <path
                  d="M120 70 L260 40 L410 70 L480 140 L370 190 L260 200 L170 170 L90 120 Z"
                  fill={currentId === "anmk" ? "#CBD5E1" : "#DAE2FD"}
                  stroke="#565E74"
                  strokeWidth={currentId === "anmk" ? "3" : "1.5"}
                  className="transition-all duration-200 hover:fill-[#CBD5E1]"
                />
                <text
                  x="270"
                  y="125"
                  textAnchor="middle"
                  className="font-display text-[12px] font-bold fill-[#0B1C30] pointer-events-none select-none"
                >
                  Adilabad–Nizamabad–Medak–Karimnagar
                </text>
                <text
                  x="270"
                  y="145"
                  textAnchor="middle"
                  className="text-[10px] font-semibold fill-[#565E74] pointer-events-none select-none"
                >
                  (Term: 2023–2029 • Outside 2027 Cycle)
                </text>
              </g>

              {/* ZONE 2 (South-West): Mahabubnagar–Rangareddy–Hyderabad (ACTIVE 2027 CYCLE 1) */}
              <g
                tabIndex={0}
                role="button"
                aria-label="Select Mahabubnagar-Rangareddy-Hyderabad constituency"
                onClick={() => handleSelect("mrh")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleSelect("mrh");
                }}
                className="cursor-pointer focus:outline-none"
              >
                <path
                  d="M90 170 L230 200 L270 240 L240 370 L130 400 L80 320 L70 230 Z"
                  fill="#B90064"
                  filter={currentId === "mrh" ? "url(#glowMagenta)" : undefined}
                  stroke="#FFFFFF"
                  strokeWidth={currentId === "mrh" ? "3" : "2"}
                  className="transition-all duration-200 hover:brightness-110"
                />
                <text
                  x="165"
                  y="275"
                  textAnchor="middle"
                  className="font-display text-[12px] font-extrabold fill-white pointer-events-none select-none"
                >
                  Mahabubnagar–Rangareddy–Hyderabad
                </text>
                <text
                  x="165"
                  y="295"
                  textAnchor="middle"
                  className="text-[10px] font-bold fill-[#FFD9E2] pointer-events-none select-none"
                >
                  ★ ACTIVE 2027 CYCLE (BRS INCUMBENT)
                </text>
              </g>

              {/* ZONE 3 (East): Warangal–Khammam–Nalgonda (ACTIVE 2027 CYCLE 2) */}
              <g
                tabIndex={0}
                role="button"
                aria-label="Select Warangal-Khammam-Nalgonda constituency"
                onClick={() => handleSelect("wkn")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleSelect("wkn");
                }}
                className="cursor-pointer focus:outline-none"
              >
                <path
                  d="M260 200 L370 190 L480 140 L500 240 L450 360 L330 380 L270 240 Z"
                  fill="#E6007E"
                  filter={currentId === "wkn" ? "url(#glowMagenta)" : undefined}
                  stroke="#FFFFFF"
                  strokeWidth={currentId === "wkn" ? "3" : "2"}
                  className="transition-all duration-200 hover:brightness-110"
                />
                <text
                  x="375"
                  y="275"
                  textAnchor="middle"
                  className="font-display text-[12px] font-extrabold fill-white pointer-events-none select-none"
                >
                  Warangal–Khammam–Nalgonda
                </text>
                <text
                  x="375"
                  y="295"
                  textAnchor="middle"
                  className="text-[10px] font-bold fill-[#F8FAFC] pointer-events-none select-none"
                >
                  ★ ACTIVE 2027 CYCLE
                </text>
              </g>
            </svg>
          </div>

          {/* Schematic Disclaimer Notice */}
          <div className="pt-3 pb-1 text-center">
            <span className="text-[11px] text-[#64748B]">
              Schematic regional visualization based on the Delimitation of Council Constituencies Order. Not an official GIS boundary layer.
            </span>
          </div>

          {/* Quick Switcher Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
            <button
              type="button"
              onClick={() => handleSelect("mrh")}
              className={`text-left p-3 rounded-xl border transition-all ${
                currentId === "mrh"
                  ? "bg-[#EFF4FF] border-[#E6007E] text-[#E6007E] font-bold shadow-xs"
                  : "bg-[#F8FAFC] border-[#E2E8F0] text-[#565E74] hover:text-[#0B1C30]"
              }`}
            >
              <span className="block truncate text-xs font-bold">1. Hyd–R.R–M&apos;nagar</span>
              <span className="text-[10px] uppercase font-bold text-[#E6007E]">
                2027 Active
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleSelect("wkn")}
              className={`text-left p-3 rounded-xl border transition-all ${
                currentId === "wkn"
                  ? "bg-[#EFF4FF] border-[#E6007E] text-[#E6007E] font-bold shadow-xs"
                  : "bg-[#F8FAFC] border-[#E2E8F0] text-[#565E74] hover:text-[#0B1C30]"
              }`}
            >
              <span className="block truncate text-xs font-bold">2. Wgl–Khammam–Nlg</span>
              <span className="text-[10px] uppercase font-bold text-[#E6007E]">
                2027 Active
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleSelect("anmk")}
              className={`text-left p-3 rounded-xl border transition-all ${
                currentId === "anmk"
                  ? "bg-[#EFF4FF] border-[#565E74] text-[#0B1C30] font-bold shadow-xs"
                  : "bg-[#F8FAFC] border-[#E2E8F0] text-[#565E74] hover:text-[#0B1C30]"
              }`}
            >
              <span className="block truncate text-xs font-bold">3. Adl–Nzb–Medak–Krm</span>
              <span className="text-[10px] uppercase font-bold text-[#565E74]">
                Future Cycle (2029)
              </span>
            </button>
          </div>
        </div>

        {/* Right: Dynamic Constituency Detail Panel */}
        <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E2E8F0] shadow-xs flex flex-col justify-between min-h-[500px]">
          <div>
            {/* Cycle Badge & Code */}
            <div className="flex items-center justify-between mb-3">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  currentConstituency.isActive2027
                    ? "bg-[#FFD9E2] text-[#3E001E]"
                    : "bg-[#EFF4FF] text-[#565E74]"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    currentConstituency.isActive2027 ? "bg-[#E6007E]" : "bg-[#565E74]"
                  }`}
                ></span>
                {currentConstituency.cycleLabel}
              </span>
              <span className="text-xs font-bold text-[#64748B] uppercase">
                Code: {currentConstituency.code}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B1C30] tracking-tight mb-2">
              {currentConstituency.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#565E74] mb-5 leading-relaxed">
              {currentConstituency.summary}
            </p>

            {/* Attributes Grid */}
            <div className="space-y-3 mb-5">
              {/* Sitting MLC & Party */}
              <div className="p-3.5 rounded-xl bg-[#EFF4FF] border border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#64748B] uppercase block">
                    Current Sitting MLC
                  </span>
                  <span className="font-display text-sm sm:text-base font-bold text-[#0B1C30]">
                    {currentConstituency.currentIncumbent.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase block">
                    Party
                  </span>
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded text-xs font-bold ${
                      currentConstituency.currentIncumbent.party === "BRS"
                        ? "bg-[#E6007E] text-white"
                        : currentConstituency.currentIncumbent.party === "INC"
                        ? "bg-[#0B1C30] text-white"
                        : "bg-[#565E74] text-white"
                    }`}
                  >
                    {currentConstituency.currentIncumbent.party}
                  </span>
                </div>
              </div>

              {/* Term End & BRS Nomination Status */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase block">
                    Statutory Term-End
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0B1C30] block">
                    {currentConstituency.statutoryTermEnd}
                  </span>
                  <span className="text-[10px] text-[#64748B]">Telangana Council Directory</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase block">
                    BRS Nominee Status
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#E6007E] block leading-tight">
                    {currentConstituency.nominationStatusLabel}
                  </span>
                </div>
              </div>

              {/* District Coverage Chips */}
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase">
                    Covered Revenue Districts ({currentConstituency.districtsCount})
                  </span>
                  <span className="material-symbols-outlined text-[#64748B] text-[16px]">
                    location_on
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto">
                  {currentConstituency.districts.map((d) => (
                    <span
                      key={d}
                      className="px-2 py-0.5 rounded-md bg-white border border-[#E2E8F0] text-[#0B1C30] text-xs font-medium"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center gap-3 pt-3 border-t border-[#F1F5F9]">
            <Link
              href={`/candidates/${currentConstituency.slug}`}
              className="flex-1 h-11 rounded-xl bg-[#E6007E] hover:bg-[#D72B75] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">badge</span>
              <span>Candidate Profile Template</span>
            </Link>
            <a
              href="#candidates"
              className="h-11 px-4 rounded-xl bg-[#EFF4FF] hover:bg-[#DCE9FF] text-[#0B1C30] text-xs font-bold transition-colors flex items-center justify-center gap-1 border border-[#CBD5E1]"
            >
              <span>Candidates</span>
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
