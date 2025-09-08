"use client";

import { useEffect, useRef } from "react";
import styles from "./secret.module.css";

export default function SecretPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Сначала пытаемся запустить со звуком
      video.muted = false;
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Автоматическое воспроизведение со звуком началось успешно
            console.log("Video autoplay with sound started successfully");
          })
          .catch((error) => {
            // Если не удалось со звуком, пробуем без звука
            console.log(
              "Autoplay with sound was prevented, trying muted:",
              error
            );
            video.muted = true;
            video.play().catch((mutedError) => {
              console.log("Even muted autoplay failed:", mutedError);
            });
          });
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        loop
        playsInline
        controls
      >
        <source src="/secret.MOV" type="video/mp4" />
        <source src="/secret.MOV" type="video/quicktime" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}
