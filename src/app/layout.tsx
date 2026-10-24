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
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansTelugu = Noto_Sans_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BRS Graduate MLC Explorer 2027 | Telangana Legislative Council",
  description:
    "Independent public information platform exploring the 2027 Telangana Graduate MLC elections, constituency delimitation, Form-18 voter registration pipeline, and verified BRS party leadership records.",
  keywords: [
    "Telangana Graduate MLC 2027",
    "BRS Graduate MLC Explorer",
    "Mahabubnagar Rangareddy Hyderabad Graduate MLC",
    "Warangal Khammam Nalgonda Graduate MLC",
    "Form 18 Voter Registration",
    "CEO Telangana Graduate Voters",
    "Telangana Legislative Council",
    "Bharat Rashtra Samithi",
  ],
  authors: [{ name: "Telangana Civic & Electoral Research Initiative" }],
  openGraph: {
    title: "BRS Graduate MLC Explorer 2027 | Telangana Legislative Council",
    description:
      "Explore the 2027 Telangana Graduate MLC constituencies, statutory timelines, Form-18 guidelines, and verified BRS candidate announcements.",
    type: "website",
    locale: "en_IN",
  },
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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0B1C30] font-sans selection:bg-[#FFD9E2] selection:text-[#E6007E]">
        <DisclaimerBanner />
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
