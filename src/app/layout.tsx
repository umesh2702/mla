import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DisclaimerBanner from "@/components/layout/DisclaimerBanner";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BRS Leadership Platform | Independent Public Information Directory",
  description:
    "An independent, source-backed public information platform profiling Bharat Rashtra Samithi (BRS) leadership, featuring Quthbullapur MLA K.P. Vivekanand.",
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
      className={`${syne.variable} ${plusJakartaSans.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#101113] text-[#E8E2D7] font-sans selection:bg-[#D72B75]/30 selection:text-white">
        <DisclaimerBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
