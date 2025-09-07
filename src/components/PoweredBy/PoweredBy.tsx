"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import c from "./PoweredBy.module.css";

const PoweredBy: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setVisible(true);
    setInputValue("");
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className={c.overlay}>
      <div className={c.modal}>
        <div className={c.text}>powered by <a href="https://unk-pn.ru" target="_blank" rel="noopener noreferrer" className={c.link}>unk</a></div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className={c.input} placeholder="Введите пароль"/>
        <button className={c.closeBtn} onClick={() => setVisible(false)} disabled={inputValue !== "1488"}>
          OK
        </button>
      </div>
    </div>
  );
};

export default PoweredBy;
