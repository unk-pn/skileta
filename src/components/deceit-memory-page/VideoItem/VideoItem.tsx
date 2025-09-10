import React, { forwardRef, useState } from "react";
import c from "./VideoItem.module.css";

export const VideoItem = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={c.video_wrapper} ref={ref}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={c.video}
        ></iframe>
    </div>
  );
});

VideoItem.displayName = "VideoItem";
