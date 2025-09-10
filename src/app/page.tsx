'use client'

import c from "./page.module.css";
import { MainInfo } from "@/components/home/MainInfo/MainInfo";

export default function Home() {
  return (
    <div className={c.page}>
      <MainInfo />
    </div>
  );
}
