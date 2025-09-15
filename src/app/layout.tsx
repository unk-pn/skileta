import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Jaini_Purva } from "next/font/google";

import "./globals.css";
import PoweredBy from "@/components/global/PoweredBy/PoweredBy";
import { Header } from "@/components/global/Header/Header";
import { Footer } from "@/components/global/Footer/Footer";

const jost = Jost({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

const jainiPurva = Jaini_Purva({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jaini-purva",
});

export const metadata: Metadata = {
  title: "skileta",
  description: "skileta's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${jainiPurva.variable} ${jost.className}`}
      >
        {/* <PoweredBy /> */}
        <Header />
        <main style={{ flex: "1" }}>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
