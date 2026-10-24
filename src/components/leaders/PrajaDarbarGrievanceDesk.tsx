"use client";

import { useState } from "react";
import {
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertTriangle,
  Building,
  RotateCcw,
} from "lucide-react";

export default function PrajaDarbarGrievanceDesk() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    division: "Quthbullapur (Ward 131)",
    category: "Drainage & Stormwater (SNDP)",
    summary: "",
    confirmed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.confirmed) {
      return;
    }
    const randId = `QUTH-DEMO-${Math.floor(100000 + Math.random() * 900000)}`;
    setTrackingId(randId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      division: "Quthbullapur (Ward 131)",
      category: "Drainage & Stormwater (SNDP)",
      summary: "",
      confirmed: false,
    });
  };

  return (
    <section id="grievance-desk" className="py-16 border-b border-[#F0E4EA] bg-[#FFF8F8] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#FCE7F0] border border-[#F8D7E5]">
            <Building className="w-3.5 h-3.5 text-[#D72B75]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55]">
              Direct Citizen Touchpoint
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24212A] tracking-tight">
            Praja Darbar Grievance Desk
          </h2>
          <p className="text-xs sm:text-sm text-[#77717B] mt-1.5 leading-relaxed font-normal">
            Physical camp office access schedule alongside a demonstrated digital intake portal for municipal, drainage, and public utility petitions.
          </p>
        </div>

        {/* 2 Columns: Left Office Info + Right Prototype Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Constituency Camp Office Details */}
          <div className="lg:col-span-5 space-y-5">
            {/* Primary Office Card */}
            <div className="rounded-3xl bg-white border border-[#F0E4EA] p-7 shadow-soft space-y-5">
              <div className="flex items-center justify-between border-b border-[#F0E4EA] pb-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#A51D55] bg-[#FCE7F0] px-2.5 py-1 rounded-full">
                    Physical Headquarters
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#24212A] mt-2">
                    Constituency Camp Office
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] flex items-center justify-center text-[#D72B75]">
                  <Building className="w-5 h-5" />
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-[#D72B75] shrink-0 mt-1" />
                <div className="text-xs text-[#24212A] leading-relaxed">
                  <strong className="block font-semibold">Location &amp; Address:</strong>
                  H.No. 5-7-14/1/1, Beside Suchitra Circle, NH-44, Medchal-Malkajgiri District, Telangana &ndash; 500067.
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA]">
                <Clock className="w-4 h-4 text-[#D72B75] shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-[#24212A] block">
                    Daily Praja Darbar: 09:00 AM &ndash; 11:30 AM
                  </span>
                  <p className="text-[11px] text-[#77717B]">
                    Open to all residents of Quthbullapur constituency without prior appointment for petition submissions and direct grievance hearings.
                  </p>
                </div>
              </div>

              {/* Contact Lines */}
              <div className="space-y-2 pt-2 border-t border-[#F0E4EA] text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#77717B]">Camp Office Landline:</span>
                  <span className="font-semibold text-[#24212A]">040-2794 8899 / 8800</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#77717B]">Citizen Support Helpline:</span>
                  <span className="font-bold text-[#D72B75]">1800 425 3300 (Toll Free)</span>
                </div>
              </div>
            </div>

            {/* Stylized Visual Map Card */}
            <div className="rounded-3xl bg-white border border-[#F0E4EA] p-5 shadow-soft space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#24212A]">Constituency Axis Map</span>
                <span className="text-[11px] text-[#77717B]">Suchitra Junction / NH-44</span>
              </div>
              <div className="relative h-44 rounded-2xl bg-gradient-to-tr from-slate-100 via-rose-50 to-pink-100 border border-[#F0E4EA] flex flex-col items-center justify-center text-center p-4 overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D72B75_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 space-y-1">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-[#D72B75] mx-auto">
                    <MapPin className="w-5 h-5 fill-[#D72B75]" />
                  </div>
                  <div className="font-display text-sm font-bold text-[#24212A]">
                    Suchitra Circle Camp Office
                  </div>
                  <div className="text-[11px] text-[#77717B]">
                    NH-44 Corridor • Near Jeedimetla • Medchal Road
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Digital Praja Darbar Form (Prototype) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[#F0E4EA] p-7 sm:p-8 shadow-soft space-y-6">
              {/* Disclosure Strip */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold uppercase tracking-wider text-[10px]">
                    Interactive Prototype Desk
                  </span>
                  <p className="text-[11px] text-amber-800 leading-relaxed font-normal">
                    This form demonstrates the civic grievance logging workflow. For genuine emergencies or physical submissions, please visit the Suchitra Circle Camp Office during daily Praja Darbar hours.
                  </p>
                </div>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name-input" className="block text-xs font-bold text-[#24212A]">
                        Full Name <span className="text-[#D72B75]">*</span>
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] text-xs text-[#24212A] focus:outline-none focus:ring-2 focus:ring-[#D72B75] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone-input" className="block text-xs font-bold text-[#24212A]">
                        Phone / WhatsApp <span className="text-[#D72B75]">*</span>
                      </label>
                      <input
                        id="phone-input"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98490 XXXXX"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] text-xs text-[#24212A] focus:outline-none focus:ring-2 focus:ring-[#D72B75] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Division / Ward */}
                    <div className="space-y-1.5">
                      <label htmlFor="division-select" className="block text-xs font-bold text-[#24212A]">
                        Ward / Division
                      </label>
                      <select
                        id="division-select"
                        value={formData.division}
                        onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] text-xs text-[#24212A] font-medium focus:outline-none focus:ring-2 focus:ring-[#D72B75] focus:bg-white"
                      >
                        <option value="Quthbullapur (Ward 131)">131 - Quthbullapur</option>
                        <option value="Gajularamaram (Ward 132)">132 - Gajularamaram</option>
                        <option value="Jagathgirigutta (Ward 130)">130 - Jagathgirigutta</option>
                        <option value="Suraram (Ward 129)">129 - Suraram</option>
                        <option value="Subhash Nagar (Ward 128)">128 - Subhash Nagar</option>
                        <option value="Jeedimetla Industrial Belt">Jeedimetla Industrial Belt</option>
                        <option value="Peri-Urban / Kompally Environs">Peri-Urban / Kompally Environs</option>
                      </select>
                    </div>

                    {/* Grievance Category */}
                    <div className="space-y-1.5">
                      <label htmlFor="category-select" className="block text-xs font-bold text-[#24212A]">
                        Grievance Category
                      </label>
                      <select
                        id="category-select"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] text-xs text-[#24212A] font-medium focus:outline-none focus:ring-2 focus:ring-[#D72B75] focus:bg-white"
                      >
                        <option value="Drainage & Stormwater (SNDP)">Drainage &amp; Stormwater (SNDP)</option>
                        <option value="Drinking Water & Supply Line (HMWSSB)">Drinking Water &amp; Supply Line (HMWSSB)</option>
                        <option value="Roads, Potholes & Streetlights">Roads, Potholes &amp; Streetlights</option>
                        <option value="Basthi Dawakhana & Public Health">Basthi Dawakhana &amp; Public Health</option>
                        <option value="Land Pattas & Regularisation (G.O. 58/59)">Land Pattas &amp; Regularisation (G.O. 58/59)</option>
                        <option value="General Civic Representation">General Civic Representation</option>
                      </select>
                    </div>
                  </div>

                  {/* Summary Textarea */}
                  <div className="space-y-1.5">
                    <label htmlFor="summary-textarea" className="block text-xs font-bold text-[#24212A]">
                      Detailed Description of Grievance
                    </label>
                    <textarea
                      id="summary-textarea"
                      rows={3}
                      value={formData.summary}
                      onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                      placeholder="Briefly describe the locality, street number, issue history, or departmental follow-up needed..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] text-xs text-[#24212A] focus:outline-none focus:ring-2 focus:ring-[#D72B75] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Confirmation Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="prototype-confirm"
                      checked={formData.confirmed}
                      onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })}
                      className="w-4 h-4 mt-0.5 rounded border-[#F0E4EA] text-[#D72B75] focus:ring-[#D72B75]"
                    />
                    <label htmlFor="prototype-confirm" className="text-[11px] text-[#77717B] leading-relaxed cursor-pointer select-none">
                      I understand that this is an independent civic information demonstration prototype and not a government dispatch server.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!formData.confirmed}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white hover:opacity-95 transition-all shadow-md shadow-[#D72B75]/25 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Grievance to MLA Desk (Demo)</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Submission Success State */
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Grievance Intake Logged (Demo Mode)
                    </div>
                    <div className="font-display text-2xl font-extrabold text-[#24212A]">
                      Tracking ID: {trackingId}
                    </div>
                    <p className="text-xs text-[#77717B] max-w-md mx-auto pt-1">
                      Your petition has been recorded in the local demonstration queue for <strong>{formData.division}</strong> under <strong>{formData.category}</strong>.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-left text-xs space-y-1 text-[#24212A] max-w-md mx-auto">
                    <div className="flex items-center justify-between text-[11px] text-[#77717B]">
                      <span>Petitioner: <strong>{formData.name}</strong></span>
                      <span>Status: <strong className="text-emerald-700">Prototype Received</strong></span>
                    </div>
                    <p className="text-[11px] text-[#77717B] pt-1">
                      Physical petitions can be handed directly to K.P. Vivekanand Goud at the Suchitra Camp Office, Mon&ndash;Sat from 09:00 AM &ndash; 11:30 AM.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-[#F0E4EA] text-[#24212A] hover:bg-[#FFF8F8] transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-[#D72B75]" />
                    <span>Log Another Demonstration Grievance</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
