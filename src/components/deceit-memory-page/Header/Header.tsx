'use client'

import React from 'react'
import c from "./Header.module.css";
import { useRouter } from 'next/navigation';

export const Header = () => {
  const router = useRouter();
  return (
    <div className={c.header}>
        <img src='/logo2.png' alt='Логотип' className={c.logo} onClick={() => router.push('/')} />
        <h1 className={c.text}>Deceit memory page</h1>
    </div>
  )
}
