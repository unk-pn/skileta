import React from "react";
import c from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={c.footer}>
      <p className={c.powered}>
        Powered by <a href="https://unk-pn.ru" target="_blank" className={c.link} >unk</a>
      </p> 
    </footer>
  );
};
