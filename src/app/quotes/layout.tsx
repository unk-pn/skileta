import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цитаты пользователей",
  description: "Коллекция цитат от пользователей skileta.ru",
  keywords: ["цитаты"],
  openGraph: {
    title: "Цитаты пользователей | skileta",
    description: "Коллекция цитат от пользователей skileta.ru",
    url: "https://skileta.ru/quotes",
  },
  alternates: {
    canonical: "https://skileta.ru/quotes",
  },
};

export default function QuotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
