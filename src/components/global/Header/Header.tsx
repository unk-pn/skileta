"use client";

import React, { useState } from "react";
import c from "./Header.module.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Главная" },
    { href: "/deceit-memory-page", label: "Памятная страница" },
    { href: "/gallery", label: "Галерея" },
    { href: "/appreciation", label: "Благодарности" },
    { href: "/quotes", label: "Цитаты" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={c.header}>
      <img
        src="/logo.svg"
        alt="Логотип"
        className={c.logo}
        onClick={() => router.push("/")}
      />

      {/* Бургер кнопка */}
      <button
        className={`${c.burgerButton} ${isMenuOpen ? c.open : ""}`}
        onClick={toggleMenu}
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Навигация */}
      <ul className={`${c.nav} ${isMenuOpen ? c.navOpen : ""}`}>
        {navItems.map(({ href, label }) => {
          const isActive =
            pathname === href || (href !== "/" && pathname.startsWith(href));

          return (
            <li key={href}>
              <Link
                href={href}
                className={c.link}
                data-active={isActive}
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Оверлей для закрытия меню */}
      {isMenuOpen && <div className={c.overlay} onClick={closeMenu}></div>}
    </div>
  );
};
