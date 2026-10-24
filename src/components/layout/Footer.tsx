"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [correctionModalOpen, setCorrectionModalOpen] = useState(false);
  const [correctionSubmitted, setCorrectionSubmitted] = useState(false);

  const handleCorrectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCorrectionSubmitted(true);
    setTimeout(() => {
      setCorrectionSubmitted(false);
      setCorrectionModalOpen(false);
    }, 2500);
  };

  return (
    <footer className="w-full bg-[#EFF4FF] border-t border-[#E2E8F0] mt-16 text-[#565E74] text-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Col 1: Brand & Purpose */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#E6007E] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">directions_car</span>
              </div>
              <span className="font-display font-bold text-base text-[#0B1C30] tracking-tight">
                BRS Graduate MLC Explorer
              </span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              An independent civic exploration archive analyzing delimitation boundaries, Form-18 registration timelines, and verified candidate information across Telangana Graduate MLC constituencies for 2027.
            </p>
            <div className="pt-1">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-[#E6007E] border border-[#E2E8F0]">
                Verified Public Archive
              </span>
            </div>
          </div>

          {/* Col 2: Official Portals */}
          <div>
            <span className="text-xs font-bold text-[#0B1C30] uppercase tracking-wider block mb-3 font-display">
              Official Portals
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://ceotelangana.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E6007E] transition-colors flex items-center gap-1.5"
                >
                  <span>CEO Telangana</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </a>
              </li>
              <li>
                <a
                  href="https://eci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E6007E] transition-colors flex items-center gap-1.5"
                >
                  <span>Election Commission of India</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </a>
              </li>
              <li>
                <a
                  href="https://voters.eci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E6007E] transition-colors flex items-center gap-1.5"
                >
                  <span>ECI Voters' Service Portal</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </a>
              </li>
              <li>
                <a
                  href="https://telanganalegislature.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E6007E] transition-colors flex items-center gap-1.5"
                >
                  <span>Telangana Legislative Council</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Voter Protocols */}
          <div>
            <span className="text-xs font-bold text-[#0B1C30] uppercase tracking-wider block mb-3 font-display">
              Voter Protocols
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#voter-guide" className="hover:text-[#E6007E] transition-colors">
                  Form-18 Registration Timeline
                </Link>
              </li>
              <li>
                <Link href="/#voter-guide" className="hover:text-[#E6007E] transition-colors">
                  3-Year Degree Eligibility Rules
                </Link>
              </li>
              <li>
                <Link href="/#constituencies" className="hover:text-[#E6007E] transition-colors">
                  Graduate Constituency Boundary Maps
                </Link>
              </li>
              <li>
                <Link href="/candidates/mahabubnagar-rangareddy-hyderabad" className="hover:text-[#E6007E] transition-colors">
                  Candidate Profile Template
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setCorrectionModalOpen(true)}
                  className="text-[#E6007E] hover:underline text-xs flex items-center gap-1 font-semibold text-left pt-1"
                >
                  <span className="material-symbols-outlined text-[14px]">flag</span>
                  <span>Report Fact Correction</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Integrity & Statutory Standards */}
          <div>
            <span className="text-xs font-bold text-[#0B1C30] uppercase tracking-wider block mb-3 font-display">
              Integrity &amp; Audits
            </span>
            <p className="text-xs text-[#64748B] mb-2 leading-relaxed">
              Compiled according to Section 27 of the Representation of the People Act, 1950 and Registration of Electors Rules, 1960.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#0B1C30] font-semibold bg-white p-2.5 rounded-lg border border-[#E2E8F0]">
              <span className="material-symbols-outlined text-[16px] text-[#006397]">
                verified_user
              </span>
              <span>Non-Partisan Public Domain Research</span>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <p className="text-center md:text-left">
            &copy; 2026–2027 Telangana Civic &amp; Electoral Research Initiative. Sourced from CEO Telangana &amp; ECI official records.
          </p>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="uppercase">Statutory Non-Partisan Prototype</span>
            <span>&bull;</span>
            <span className="uppercase">Hyderabad, Telangana</span>
            <span>&bull;</span>
            <Link href="/about" className="text-[#E6007E] hover:underline">
              Sources &amp; Methodology
            </Link>
          </div>
        </div>
      </div>

      {/* Fact Correction Interactive Modal */}
      {correctionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1C30]/50 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-[#E2E8F0] relative">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E6007E] text-[20px]">flag</span>
                <h3 className="font-display font-bold text-base text-[#0B1C30]">
                  Submit Factual Correction
                </h3>
              </div>
              <button
                onClick={() => setCorrectionModalOpen(false)}
                className="text-[#64748B] hover:text-[#0B1C30] p-1 rounded-lg"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {correctionSubmitted ? (
              <div className="py-6 text-center space-y-2">
                <span className="material-symbols-outlined text-[#006397] text-[40px]">check_circle</span>
                <h4 className="font-display font-bold text-sm text-[#0B1C30]">
                  Correction Logged
                </h4>
                <p className="text-xs text-[#64748B]">
                  Thank you! Your citation will be reviewed against official CEO Telangana gazettes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCorrectionSubmit} className="space-y-3">
                <p className="text-xs text-[#64748B]">
                  We maintain zero-tolerance for fabricated figures or unverified claims. Please provide the official gazette link or source citation.
                </p>
                <div>
                  <label className="block text-xs font-semibold text-[#0B1C30] mb-1">
                    Constituency / Topic
                  </label>
                  <select className="w-full h-10 px-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0B1C30] focus:outline-none focus:ring-2 focus:ring-[#E6007E]">
                    <option>Mahabubnagar–Rangareddy–Hyderabad</option>
                    <option>Warangal–Khammam–Nalgonda</option>
                    <option>Adilabad–Nizamabad–Medak–Karimnagar</option>
                    <option>Form-18 Voter Registration Schedule</option>
                    <option>BRS Party Leadership Directory</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0B1C30] mb-1">
                    Details &amp; Official URL Citation
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe the discrepancy and paste the official government/ECI reference URL..."
                    className="w-full p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0B1C30] focus:outline-none focus:ring-2 focus:ring-[#E6007E]"
                  />
                </div>
                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setCorrectionModalOpen(false)}
                    className="px-4 py-2 rounded-lg bg-[#EFF4FF] text-xs font-semibold text-[#565E74] hover:bg-[#E2E8F0]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#E6007E] text-xs font-semibold text-white hover:bg-[#D72B75] shadow-sm"
                  >
                    Submit for Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
