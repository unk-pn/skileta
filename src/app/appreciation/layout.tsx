import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Благодарность дорогим людям",
  description:
    "Благодарности самым дорогим людям от skileta",
  keywords: [
    "благодарности",
  ],
  openGraph: {
    title: "Благодарности дорогим людям | skileta",
    description:
      "Коллекция благодарностей от пользователей skileta.ru",
    url: "https://skileta.ru/appreciation",
  },
};

export default function AppreciationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
