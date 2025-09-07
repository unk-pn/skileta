"use client";

import React, { useEffect, useRef, useState } from "react";
import "./deceit-memory-page.module.css";
import { MainInfo } from "@/components/deceit-memory-page/MainInfo/MainInfo";
import { VideoItem } from "@/components/deceit-memory-page/VideoItem/VideoItem";
import { ScrollDownButton } from "@/components/deceit-memory-page/ScrollButton/ScrollButton";
import { ProjectTeam } from "@/components/deceit-memory-page/ProjectTeam/ProjectTeam";
import c from "./deceit-memory-page.module.css";

const DeceitMemoryPage = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        setShowScrollDown(!isVisible);
      },
      {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <div className={c.title}>Deceit memory page</div>
      <MainInfo />
      <VideoItem ref={videoRef} />
      <ProjectTeam />
      {/* <Footer /> */}
      {showScrollDown && <ScrollDownButton targetRef={videoRef} />}
    </div>
  );
};

export default DeceitMemoryPage;
