import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Галерея воспоминаний Deceit 1",
  description: "Коллекция воспоминаний от пользователей skileta.ru",
  keywords: ["воспоминания"],
  openGraph: {
    title: "Галерея воспоминаний | skileta",
    description: "Коллекция воспоминаний от пользователей skileta.ru",
    url: "https://skileta.ru/gallery",
  },
  alternates: {
    canonical: "https://skileta.ru/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
