import type { Metadata } from "next";
import HomePageClient from "@/components/home/HomePageClient";

export const metadata: Metadata = {
  title: "BRS Graduate MLC Explorer 2027 | Telangana Legislative Council",
  description:
    "An independent, source-grounded civic directory and interactive delimitation platform exploring the 2027 Telangana Graduate MLC elections, verified incumbent records, Form-18 registration pipeline, and BRS party leadership.",
};

export default function HomePage() {
  return <HomePageClient />;
}
