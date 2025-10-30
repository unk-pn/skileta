import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Галерея воспоминаний Deceit 1",
  description:
    "Страница, посвященная потраченному времени в игре и результатам пребывания в сообществе",
  keywords: ["воспоминания", "хайлайт"],
  openGraph: {
    title: "Галерея воспоминаний | skileta",
    description: "Коллекция воспоминаний от пользователей skileta.ru",
    url: "https://skileta.ru/gallery",
  },
};

export default function MemoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
