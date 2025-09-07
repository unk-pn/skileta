'use client'

import { Footer } from "@/components/Footer/Footer";
import c from "./page.module.css";
import { MainInfo } from "@/components/MainPage/MainInfo/MainInfo";

export default function Home() {
  return (
    <div className={c.page}>
      <MainInfo />
      {/* <Footer /> */}
    </div>
  );
}
