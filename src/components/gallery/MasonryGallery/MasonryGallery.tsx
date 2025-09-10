import React from "react";
import Image from "next/image";
import c from "./MasonryGallery.module.css";

export const MasonryGallery = () => {
  const photos = [
    { id: 1, src: "/gallery/1.jpg", alt: "Photo 1" },
    { id: 2, src: "/gallery/2.jpg", alt: "Photo 2" },
    { id: 3, src: "/gallery/3.jpg", alt: "Photo 3" },
    { id: 4, src: "/gallery/4.jpg", alt: "Photo 4" },
    { id: 5, src: "/gallery/5.jpg", alt: "Photo 5" },
    { id: 6, src: "/gallery/6.jpg", alt: "Photo 6" },
    { id: 7, src: "/gallery/7.jpg", alt: "Photo 7" },
    { id: 8, src: "/gallery/8.jpg", alt: "Photo 8" },
    { id: 9, src: "/gallery/9.jpg", alt: "Photo 9" },
    { id: 10, src: "/gallery/10.jpg", alt: "Photo 10" },
    { id: 11, src: "/gallery/11.jpg", alt: "Photo 11" },
    { id: 12, src: "/gallery/12.jpg", alt: "Photo 12" },
    { id: 13, src: "/gallery/13.jpg", alt: "Photo 13" },
  ];

  return (
    <div className={c.wrapper}>
      <div className={c.masonry}>
        {photos.map((photo) => (
          <div key={photo.id} className={c.item}>
            <Image
              src={photo.src}
              alt={photo.alt}
              className={c.image}
              width={400}
              height={600}
              style={{ width: "100%", height: "auto" }}
              priority={photo.id <= 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
