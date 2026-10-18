import { Quote, HeartHandshake, Shield, Sparkles } from "lucide-react";

export default function EditorialQuoteSection() {
  const safetyNets = [
    {
      title: "Chief Minister Relief Fund (CMRF)",
      summary: "Over ₹35+ Cr expedited for critical surgeries, tertiary treatments, and medical emergencies for lower-income families without institutional insurance.",
      icon: HeartHandshake,
      badge: "Healthcare Relief",
    },
    {
      title: "Aasara Social Safety Net",
      summary: "Guaranteed monthly welfare security pensions transferred directly to 32,000+ senior citizens, widows, beedi workers, and differently-abled residents.",
      icon: Shield,
      badge: "Dignity Pension",
    },
    {
      title: "Agrarian & Peri-Urban Support",
      summary: "24/7 uninterrupted power for agricultural borewells, Rythu Bandhu investment support, and localized flood mitigation for peri-urban farmers.",
      icon: Sparkles,
      badge: "Livelihood Safety",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#24212A] via-[#352535] to-[#1E1B24] text-white py-16 sm:py-20 border-y border-[#D72B75]/20">
      {/* Decorative subtle ambient pink glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-radial from-[#D72B75]/15 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Main Quote Block */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#D72B75] to-[#A51D55] text-white shadow-lg shadow-[#D72B75]/30 mx-auto">
            <Quote className="w-7 h-7" />
          </div>

          <blockquote className="font-display text-xl sm:text-2xl lg:text-[28px] font-semibold text-rose-50 leading-relaxed tracking-tight">
            &ldquo;True governance is not reflected in hollow declarations, but in being steadfastly present among the people whenever they need support, guidance, or civic relief.&rdquo;
          </blockquote>

          <div className="pt-2">
            <div className="font-display text-base font-bold text-white">
              K.P. Vivekanand Goud
            </div>
            <div className="text-xs sm:text-sm text-rose-200/80 font-medium">
              MLA, Quthbullapur Assembly Constituency • Bharat Rashtra Samithi
            </div>
          </div>
        </div>

        {/* Triple Welfare Safety Net Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
          {safetyNets.map((net, i) => {
            const Icon = net.icon;
            return (
              <div
                key={i}
                className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm space-y-3 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D72B75]/30 text-rose-200 border border-[#D72B75]/40">
                    {net.badge}
                  </span>
                  <Icon className="w-4 h-4 text-[#D72B75] group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  {net.title}
                </h4>
                <p className="text-xs text-rose-100/70 leading-relaxed">
                  {net.summary}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
