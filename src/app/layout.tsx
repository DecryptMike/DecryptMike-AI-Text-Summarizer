import { MatrixRain } from "@/components/MatrixRain";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DecryptMike AI Summarizer",
  description: "Summarize your text in cyberpunk style.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-black overflow-hidden">
        <MatrixRain />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}