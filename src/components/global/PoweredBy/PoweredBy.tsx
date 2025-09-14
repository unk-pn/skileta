"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import c from "./PoweredBy.module.css";

const PoweredBy: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/secret") {
      setVisible(true);
      setOpen(false);
      // setInputValue("");
    }
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className={c.overlay}>
      <div className={c.modal}>
        <div className={c.text}>
          powered by{" "}
          <a
            href="https://unk-pn.ru"
            target="_blank"
            rel="noopener noreferrer"
            className={c.link}
          >
            unk
          </a>
          <p>Скоро данная страница откроется.</p>
        </div>
        {open && (
          <>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={c.input}
              placeholder="Введите пароль"
            />
            <button
              className={c.closeBtn}
              onClick={() => setVisible(false)}
              disabled={inputValue !== "27072021"}
            >
              OK
            </button>
          </>
        )}

        {/* <button className={c.closeBtn} onClick={() => setVisible(false)}>
          OK
        </button> */}
        <p className={c.description}>
          Work in progress<span onClick={() => setOpen(true)}>*</span>
        </p>
      </div>
    </div>
  );
};

export default PoweredBy;
