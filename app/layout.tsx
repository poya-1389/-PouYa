import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import AnimatedBackground from "@/components/AnimatedBackground";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"]
});

// Persian fallback so Fraunces/Manrope gracefully hand off Arabic-script
// glyphs to a face designed for them.
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-fa",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "PouYa",
  description: "PouYa — personal site"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} ${vazirmatn.variable} font-body antialiased`}
      >
        <LanguageProvider>
          <AnimatedBackground />
          <div className="noise" />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
