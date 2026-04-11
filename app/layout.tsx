import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regina Garfias — Risk Analytics & AI",
  description: "Risk Analytics, Anomaly Detection, and AI portfolio of Regina Garfias.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#0a0a0a]`}>
        <Navbar />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}