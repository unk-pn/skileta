import type { Metadata } from "next";

import "./globals.css";
import PoweredBy from "@/components/PoweredBy/PoweredBy";

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
      <body>
        <PoweredBy />
        {children}
      </body>
    </html>
  );
}
