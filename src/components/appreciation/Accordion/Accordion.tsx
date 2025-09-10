import React, { useState } from 'react'
import c from "./Accordion.module.css";

interface AccordionProps {
    name: string;
    text: string;
}

export const Accordion = ({ name, text }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={c.wrapper}>
      <button className={c.header} onClick={() => setOpen(!open)}>
        <span>{name}</span>
        <span className={c.arrow}>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className={c.content}>
            <div className={c.text}>{text}</div>
        </div>
      )}
    </div>
  );
}
