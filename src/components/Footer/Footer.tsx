import React from "react";
import c from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={c.footer}>
      <div className={c.socials}>
        <ul className={c.list}>
          <li className={c.logo}><a href='#'><img src="/youtube.svg" alt="Youtube" /></a></li>
          <li className={c.logo}><a href='#'><img src="/discord.svg" alt="Discord" /></a></li>
          <li className={c.logo}><a href='#'><img src="/telegram.svg" alt="Telegram" /></a></li>
        </ul>
      </div>

      <div className={c.info}>
        <p className={c.powered}>
          Powered by <a href="https://unk-pn.ru" target="_blank" className={c.link} >unk</a>
        </p> 
        <p className={c.designed}>
          Designed by <a href="https://t.me/oki_6" target="_blank" className={c.link} >Oki</a>
        </p>
      </div>
    </footer>
  );
};
