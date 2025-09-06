'use client'

import React from 'react'
import c from "./Header.module.css";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: '/', label: 'Главная' },
    { href: '/deceit-memory-page', label: 'Памятная страница' },
    { href: '/gallery', label: 'Галерея' },
    { href: '/appreciation', label: 'Благодарности' },
  ];


  return (
    <div className={c.header}>
      <img src='/logo2.png' alt='Логотип' className={c.logo} onClick={() => router.push('/')} />
      <ul className={c.nav}>
        {navItems.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

            return (
              <li key={href}>
                <Link href={href} className={c.link} data-active={isActive}>
                  {label}
                </Link>
              </li>
            )
        })}
      </ul>
    </div>
  )
}
