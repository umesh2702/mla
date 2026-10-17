import { ContactInfo } from "@/types/leader";
import { ExternalLink, Share2, Info } from "lucide-react";

interface ContactSectionProps {
  contact: ContactInfo;
}

export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 border-b border-[#F0E4EA] bg-[#FFF8F8] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55] bg-[#FCE7F0] px-3 py-1 rounded-full">
              Constituency Access &amp; Public Channels
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#24212A]">
            Official Public Representation Points
          </h2>
          <p className="text-xs text-[#77717B] mt-1 max-w-xl font-medium">
            Only verified institutional offices and confirmed public channels are displayed. In accordance with privacy and integrity standards, personal contact details are omitted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Office Locations */}
          <div className="p-7 rounded-3xl bg-white border border-[#F0E4EA] space-y-4 shadow-soft">
            <h3 className="font-display text-base font-bold text-[#24212A] border-b border-[#F0E4EA] pb-3.5">
              Official Legislative &amp; Camp Offices
            </h3>

            {contact.officeAddress && (
              <div className="p-4 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] space-y-1">
                <div className="text-[10px] text-[#77717B] uppercase font-bold tracking-wider">
                  MLA Camp Office (Constituency Grievance Hub)
                </div>
                <p className="text-xs text-[#24212A] font-medium leading-relaxed">
                  {contact.officeAddress}
                </p>
              </div>
            )}

            {contact.constituencyOffice && (
              <div className="p-4 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] space-y-1">
                <div className="text-[10px] text-[#77717B] uppercase font-bold tracking-wider">
                  District Secretariat Representation
                </div>
                <p className="text-xs text-[#77717B] font-medium">
                  {contact.constituencyOffice}
                </p>
              </div>
            )}

            <div className="flex items-center gap-2 text-xs text-[#77717B] pt-2">
              <Info className="w-4 h-4 text-[#D72B75] shrink-0" />
              <span>
                Public grievance hearings (&ldquo;Prajadarbar&rdquo;) are typically conducted on announced weekday mornings at the constituency camp office.
              </span>
            </div>
          </div>

          {/* Verified Public Handles */}
          <div className="p-7 rounded-3xl bg-white border border-[#F0E4EA] space-y-4 shadow-soft">
            <h3 className="font-display text-base font-bold text-[#24212A] border-b border-[#F0E4EA] pb-3.5">
              Verified Public Channels
            </h3>

            {contact.verifiedSocialHandles && contact.verifiedSocialHandles.length > 0 ? (
              <div className="space-y-3">
                {contact.verifiedSocialHandles.map((handle, i) => (
                  <a
                    key={i}
                    href={handle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] hover:border-[#D72B75]/50 hover:bg-white transition-all group shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#FCE7F0] flex items-center justify-center text-[#D72B75]">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#24212A] group-hover:text-[#D72B75]">
                          {handle.platform}
                        </div>
                        <div className="text-[11px] text-[#77717B]">
                          {handle.handle}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#77717B] group-hover:text-[#D72B75]" />
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-xs text-[#77717B]">
                No public handles recorded for this profile.
              </p>
            )}

            {contact.officialEmailNotice && (
              <div className="p-3.5 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] text-xs text-[#77717B]">
                {contact.officialEmailNotice}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
