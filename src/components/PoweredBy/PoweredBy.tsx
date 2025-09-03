"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./PoweredBy.module.css";

const PoweredBy: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setVisible(true);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        powered by unk-pn
        <button className={styles.closeBtn} onClick={() => setVisible(false)}>
          OK
        </button>
      </div>
    </div>
  );
};

export default PoweredBy;
