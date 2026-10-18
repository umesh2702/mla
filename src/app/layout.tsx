import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DisclaimerBanner from "@/components/layout/DisclaimerBanner";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const notoSansTelugu = Noto_Sans_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BRS Leadership Platform | Civic Information & Quthbullapur Dossier",
  description:
    "An independent, source-grounded leadership directory profiling Bharat Rashtra Samithi (BRS) legislative leaders, featuring Quthbullapur MLA K.P. Vivekanand.",
  keywords: [
    "K.P. Vivekanand",
    "Quthbullapur MLA",
    "BRS Leaders",
    "Bharat Rashtra Samithi",
    "Telangana Assembly",
    "KTR",
    "Harish Rao",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${notoSansTelugu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFCFD] text-[#24212A] font-sans selection:bg-[#FCE7F0] selection:text-[#A51D55]">
        <DisclaimerBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
