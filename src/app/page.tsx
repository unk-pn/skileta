'use client'

import { useRouter } from "next/navigation";
import c from "./page.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <div className={c.page}>
      <p>Skileta&#39;s personal website</p>
      <button onClick={() => router.push("/deceit-memory-page")}>Enter</button>
    </div>
  );
}
