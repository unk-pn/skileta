'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import c from "./MainInfo.module.css";

export const MainInfo = () => {
  const router = useRouter();

  return (
    <div className={c.container}>
      <div className={c.wrapper}>
        <div className={c.title} onClick={() => router.push('/secret')}>skileta</div>
  
        <div className={c.textWrapper}>
          <div className={c.text}>
            Данный сайт посвящён всему, что я делал на протяжении долгого времени,
            всему, над чем и ради чего я старался. Все, что размещено тут — часть
            меня, которая греет меня каждый день, часть, которая значит для меня
            многое и которой я хочу поделиться. Спасибо всем, кто был со мной в
            прошлом и остается сейчас.
            <br />
            <p className={c.paragraph2}>
              Особую благодарность хочется выразить людям, которых я отметил во
              вкладке{" "}
              <span onClick={() => router.push("/appreciation")} className={c.link}>
                благодарности
              </span>
              . Очень приятно было иметь честь стать частью подобного сообщества.
            </p>
          </div>
          <button onClick={() => router.push("/deceit-memory-page")} className={c.button}>
            Памятная страница <img src={'/arrow-right.svg'} alt="arrow" className={c.arrow} />
          </button>
        </div>
      </div>

      <div className={c.imageWrapper}>
        <img src="/deceit.png" alt="Deceit logo" className={c.image} />
      </div>
    </div>
  );
}
