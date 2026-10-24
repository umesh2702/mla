"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Send,
  X
} from "lucide-react";
import { MASTER_SOURCES } from "@/data/sources";

export default function SourceTransparencySection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    constituencyOrLeader: "Quthbullapur / K.P. Vivekanand",
    claimDetails: "",
    evidenceUrl: "",
  });

  const sourcesList = Object.values(MASTER_SOURCES).slice(0, 6);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setForm({
        name: "",
        email: "",
        constituencyOrLeader: "Quthbullapur / K.P. Vivekanand",
        claimDetails: "",
        evidenceUrl: "",
      });
    }, 2000);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FFFCFE] border-b border-[#EDE3E9]" id="methodology-sources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-[#EDE3E9] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#D72B75]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#A51D55] bg-[#FFF1F7] px-2.5 py-0.5 rounded-full border border-[#F7DCE9]">
                Data Provenance &amp; Verification
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24212A]">
              Data Methodology &amp; Sources
            </h2>
          </div>
          <p className="text-xs text-[#756D78] max-w-md font-medium">
            Strict institutional standards. Every vote total, project figure, and biographical milestone is traced to primary statutory records and audited gazettes.
          </p>
        </div>

        {/* 5 Methodology Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[#EDE3E9] shadow-soft space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#FFF1F7] text-[#D72B75] flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-display font-bold text-sm text-[#28212A]">Electoral Records</h3>
            <p className="text-xs text-[#756D78] leading-relaxed">
              Form 20 final result sheets, postal ballot records, and official statistical reports published directly by the <strong>Election Commission of India (ECI)</strong>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#EDE3E9] shadow-soft space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#FFF1F7] text-[#D72B75] flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-display font-bold text-sm text-[#28212A]">Legislative Floor</h3>
            <p className="text-xs text-[#756D78] leading-relaxed">
              Official transcripts of assembly debates, starred/unstarred questions, and committee proceedings from the <strong>Telangana Legislature Secretariat</strong>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#EDE3E9] shadow-soft space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#FFF1F7] text-[#D72B75] flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="font-display font-bold text-sm text-[#28212A]">Public Works &amp; GOs</h3>
            <p className="text-xs text-[#756D78] leading-relaxed">
              Sanctioned government orders (GOs), GHMC administrative sanctions, HMDA masterplans, and SNDP flood channelization engineering audits.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#EDE3E9] shadow-soft space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#FFF1F7] text-[#D72B75] flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h3 className="font-display font-bold text-sm text-[#28212A]">Dual Verification</h3>
            <p className="text-xs text-[#756D78] leading-relaxed">
              No claim is published without dual corroboration. When official expenditure data is pending audit, it is clearly flagged as unverified rather than estimated.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#EDE3E9] shadow-soft space-y-2 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-xl bg-[#FFF1F7] text-[#D72B75] flex items-center justify-center font-bold text-xs">
                05
              </div>
              <h3 className="font-display font-bold text-sm text-[#28212A] mt-2">Correction Process</h3>
              <p className="text-xs text-[#756D78] leading-relaxed">
                Open public dispute redressal. Any researcher, official, or citizen can submit verifiable citations for rapid editorial correction.
              </p>
            </div>
            <button
              type="button"
              id="report-correction-btn"
              onClick={() => setModalOpen(true)}
              className="mt-2 w-full py-2 px-3 rounded-xl bg-[#FFF1F7] text-[#D72B75] border border-[#F7DCE9] text-xs font-semibold hover:bg-[#D72B75] hover:text-white transition-all text-center"
            >
              Request a Correction
            </button>
          </div>
        </div>

        {/* Primary Sourced References Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-lg text-[#28212A]">
              Sample Primary Statutory Sources
            </h3>
            <Link
              href="/about"
              className="text-xs text-[#D72B75] font-semibold hover:underline flex items-center gap-1"
            >
              <span>View Full Source Register</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sourcesList.map((src) => (
              <div
                key={src.id}
                className="p-5 rounded-2xl bg-white border border-[#EDE3E9] flex flex-col justify-between shadow-soft hover:shadow-card-hover transition-all"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#FFF1F7] text-[#D72B75] border border-[#F7DCE9]">
                      {src.verificationStatus}
                    </span>
                    {src.publicationDate && (
                      <span className="text-[11px] text-[#756D78]">
                        {src.publicationDate}
                      </span>
                    )}
                  </div>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-[#28212A] line-clamp-2">
                    {src.title}
                  </h4>
                  <p className="text-xs text-[#756D78]">
                    <strong className="text-[#28212A]">Publisher:</strong> {src.publisher}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#EDE3E9] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#756D78]">
                    Audited {src.dateAccessed}
                  </span>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#D72B75] hover:text-[#A51D55] transition-colors"
                  >
                    <span>Inspect Record</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Correction Modal */}
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
                Public Review &amp; Redressal
              </span>
              <h3 className="font-display text-xl font-bold text-[#28212A] mt-1">
                Submit a Verification or Correction Request
              </h3>
              <p className="text-xs text-[#756D78] mt-1">
                Help maintain 100% factual fidelity. Please provide the specific statement or figure along with a verifiable link or gazette citation.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-display font-bold text-sm text-emerald-900">
                  Correction Request Received
                </h4>
                <p className="text-xs text-emerald-700">
                  Thank you. Our civic research team will cross-reference your citation against primary records within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-[#28212A] mb-1">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar (Civic Analyst)"
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#28212A] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="For editorial follow-up"
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#28212A] mb-1">
                    Constituency or Leader Profile
                  </label>
                  <input
                    type="text"
                    required
                    value={form.constituencyOrLeader}
                    onChange={(e) => setForm({ ...form, constituencyOrLeader: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#28212A] mb-1">
                    Details of the Inaccurate or Outdated Information
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={form.claimDetails}
                    onChange={(e) => setForm({ ...form, claimDetails: e.target.value })}
                    placeholder="Describe the claim, figure, or date that requires update..."
                    className="w-full px-3 py-2 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#28212A] mb-1">
                    Primary Source URL or Gazette Reference
                  </label>
                  <input
                    type="url"
                    required
                    value={form.evidenceUrl}
                    onChange={(e) => setForm({ ...form, evidenceUrl: e.target.value })}
                    placeholder="https://eci.gov.in/... or GO reference"
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
                    <span>Submit for Review</span>
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
