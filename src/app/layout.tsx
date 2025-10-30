import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Jaini_Purva } from "next/font/google";

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
  title: {
    template: "%s | skileta",
    default: "skileta - Памятная страница Deceit 1",
  },
  description:
    "Памятный сайт в честь игры Deceit 1 и ее сообщества. Вы можете поделиться своими воспоминаниями, историями и пожеланиями для всех, кто играл с вами в одних матчах.",
  keywords: ["skileta", "deceit"],
  authors: [{ name: "unk_pn" }],
  creator: "unk_pn",
  publisher: "unk_pn",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://skileta.ru",
    title: "skileta",
    description: "Памятный сайт в честь игры Deceit 1 и ее сообщества",
    siteName: "skileta",
  },
  metadataBase: new URL("https://skileta.ru"),
  alternates: {
    canonical: "https://skileta.ru",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${jost.variable} ${jainiPurva.variable} ${jost.className}`}
      >
        <Header />
        <main style={{ flex: "1" }}>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
