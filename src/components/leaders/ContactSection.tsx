import { ContactInfo } from "@/types/leader";
import { MapPin, ExternalLink, Share2, Info } from "lucide-react";

interface ContactSectionProps {
  contact: ContactInfo;
}

export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="py-12 border-b border-[#262930] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-[#D72B75]" />
            <span className="text-xs uppercase font-bold tracking-wider text-[#D72B75]">
              Constituency Access &amp; Public Channels
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#E8E2D7]">
            Official Public Representation Points
          </h2>
          <p className="text-xs text-[#777B78] mt-1 max-w-xl">
            Only verified institutional offices and confirmed public channels are displayed. In accordance with privacy and integrity standards, personal contact details are omitted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Office Locations */}
          <div className="p-6 rounded-2xl bg-[#191B20] border border-[#2D313A] space-y-4">
            <h3 className="font-display text-base font-bold text-[#E8E2D7] border-b border-[#262930] pb-3">
              Official Legislative &amp; Camp Offices
            </h3>

            {contact.officeAddress && (
              <div className="p-3.5 rounded-xl bg-[#101113] border border-[#262930] space-y-1">
                <div className="text-[10px] text-[#777B78] uppercase font-bold tracking-wider">
                  MLA Camp Office (Constituency Grievance Hub)
                </div>
                <p className="text-xs text-[#E8E2D7] leading-relaxed">
                  {contact.officeAddress}
                </p>
              </div>
            )}

            {contact.constituencyOffice && (
              <div className="p-3.5 rounded-xl bg-[#101113] border border-[#262930] space-y-1">
                <div className="text-[10px] text-[#777B78] uppercase font-bold tracking-wider">
                  District Secretariat Representation
                </div>
                <p className="text-xs text-[#9EA39F]">
                  {contact.constituencyOffice}
                </p>
              </div>
            )}

            <div className="flex items-center gap-2 text-xs text-[#777B78] pt-2">
              <Info className="w-3.5 h-3.5 text-[#D72B75] shrink-0" />
              <span>
                Public grievance hearings (&ldquo;Prajadarbar&rdquo;) are typically conducted on announced weekday mornings at the constituency camp office.
              </span>
            </div>
          </div>

          {/* Verified Public Handles */}
          <div className="p-6 rounded-2xl bg-[#191B20] border border-[#2D313A] space-y-4">
            <h3 className="font-display text-base font-bold text-[#E8E2D7] border-b border-[#262930] pb-3">
              Verified Public Channels
            </h3>

            {contact.verifiedSocialHandles && contact.verifiedSocialHandles.length > 0 ? (
              <div className="space-y-2.5">
                {contact.verifiedSocialHandles.map((handle, i) => (
                  <a
                    key={i}
                    href={handle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#101113] border border-[#262930] hover:border-[#D72B75]/50 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Share2 className="w-4 h-4 text-[#D72B75]" />
                      <div>
                        <div className="text-xs font-semibold text-[#E8E2D7] group-hover:text-white">
                          {handle.platform}
                        </div>
                        <div className="text-[11px] text-[#777B78]">
                          {handle.handle}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#777B78] group-hover:text-[#D72B75]" />
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-xs text-[#777B78]">
                No public handles recorded for this profile.
              </p>
            )}

            {contact.officialEmailNotice && (
              <div className="p-3 rounded-xl bg-[#14161A] border border-[#262930] text-xs text-[#777B78]">
                {contact.officialEmailNotice}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
