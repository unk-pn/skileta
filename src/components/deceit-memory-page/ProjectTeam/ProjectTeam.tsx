import React, { useState } from "react";
import с from "./ProjectTeam.module.css";

export const ProjectTeam: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={с.wrapper}>
      <button className={с.header} onClick={() => setOpen(!open)}>
        <span>Над проектом работали</span>
        <span className={с.arrow}>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className={с.content}>
          <ul>
            <li>
              skileta - Управление проектом, творческая работа (монтаж видео,
              визуальная составляющая сайта), геймплей.
            </li>

            <br />
            <hr />
            <br />

            <li>
              unk - Разработка сайта (техническая реализация), помощь в
              творческих аспектах.
            </li>
            <li>d0uble_ra1n - 3D, помощь в творческих аспектах.</li>
            <li>kxshmar - Помощь в творческих аспектах, геймплей.</li>
            <li>lipst1kk - Геймплей.</li>
            <li>melw1s - Геймплей.</li>
            <li>kaleqil - Геймплей.</li>
          </ul>
        </div>
      )}
    </div>
  );
};
