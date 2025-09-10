import React from 'react'
import c from './gallery.module.css'
import { MasonryGallery } from '@/components/gallery/MasonryGallery/MasonryGallery';

const page = () => {
  return (
    <div>
      <div className={c.title}>Gallery</div>
        <MasonryGallery />
    </div>
  )
}

export default page;
