"use client";

import { useState } from "react";
import { SourceCitation } from "@/types/source";
import { ExternalLink, ShieldCheck, CheckCircle2, Send, X } from "lucide-react";

interface SourcesSectionProps {
  sources: SourceCitation[];
}

export default function SourcesSection({ sources }: SourcesSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reportNote, setReportNote] = useState("");
  const [citationUrl, setCitationUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setReportNote("");
      setCitationUrl("");
    }, 2000);
  };

  return (
    <section id="sources" className="py-14 sm:py-20 bg-[#FFFCFE] scroll-mt-32 border-t border-[#EDE3E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-[#EDE3E9] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#D72B75]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55] bg-[#FFF1F7] px-3 py-1 rounded-full border border-[#F7DCE9]">
                Verification Register
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#28212A]">
              Referenced Statutory &amp; Gazette Sources ({sources.length})
            </h2>
            <p className="text-xs text-[#756D78] mt-1 max-w-xl font-medium">
              Every factual claim in this profile maps directly to audited public records, Election Commission gazettes, and official assembly proceedings.
            </p>
          </div>

          <button
            type="button"
            id="profile-report-inaccuracy-btn"
            onClick={() => setModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-[#FFF1F7] text-[#D72B75] border border-[#F7DCE9] text-xs font-semibold hover:bg-[#D72B75] hover:text-white transition-all shrink-0"
          >
            Report Inaccurate or Outdated Data
          </button>
        </div>

        {/* Source Categories Legend */}
        <div className="p-4 rounded-2xl bg-[#FFF8F8] border border-[#EDE3E9] text-xs text-[#756D78] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-[#28212A]">Classification:</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Official Statutory Record (ECI / Gazette)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D72B75]" />
              <span>Legislative Secretariat Proceeding</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Reputable Investigative Report</span>
            </span>
          </div>
          <span className="text-[11px] italic">
            *Unverified or anecdotal claims are excluded by editorial policy
          </span>
        </div>

        {/* Source Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sources.map((src) => (
            <div
              key={src.id}
              className="p-6 rounded-3xl bg-white border border-[#EDE3E9] flex flex-col justify-between space-y-3 shadow-soft hover:shadow-card-hover transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#FFF1F7] text-[#D72B75] border border-[#F7DCE9]">
                    {src.verificationStatus}
                  </span>
                  {src.publicationDate && (
                    <span className="text-[11px] text-[#756D78]">
                      {src.publicationDate}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-sm font-bold text-[#28212A]">
                  {src.title}
                </h3>
                <p className="text-xs text-[#756D78]">
                  <strong className="text-[#28212A]">Publisher:</strong> {src.publisher}
                </p>
                {src.notes && (
                  <p className="text-[11px] text-[#756D78] italic">
                    {src.notes}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-[#EDE3E9] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#756D78]">
                  Verified {src.dateAccessed}
                </span>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#D72B75] hover:text-[#A51D55] transition-colors"
                >
                  <span>Open Primary Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Correction Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#EDE3E9] shadow-2xl max-w-lg w-full p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full text-[#756D78] hover:text-[#28212A] hover:bg-[#FFF8F8]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#FFF1F7] text-[#D72B75] border border-[#F7DCE9]">
                Correction Mechanism
              </span>
              <h3 className="font-display text-xl font-bold text-[#28212A] mt-1">
                Report Inaccurate or Outdated Profile Information
              </h3>
              <p className="text-xs text-[#756D78] mt-1">
                Submit a citation or updated gazette order. We will cross-reference the claim with statutory sources.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-display font-bold text-sm text-emerald-900">
                  Submission Logged
                </h4>
                <p className="text-xs text-emerald-700">
                  Thank you for contributing to public accuracy. Our researchers will review your submission against primary archives.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-[#28212A] mb-1">
                    Describe the discrepancy
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={reportNote}
                    onChange={(e) => setReportNote(e.target.value)}
                    placeholder="Specify which statement, figure, or timeline date is inaccurate..."
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#28212A] mb-1">
                    Verifiable URL or Official Document Citation
                  </label>
                  <input
                    type="url"
                    required
                    value={citationUrl}
                    onChange={(e) => setCitationUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-[#EDE3E9] text-[#756D78] hover:bg-[#FFF8F8] font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#D72B75] hover:bg-[#C22064] text-white font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
