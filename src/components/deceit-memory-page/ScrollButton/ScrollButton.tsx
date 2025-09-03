import React, { RefObject } from "react";
import styles from "./ScrollButton.module.css";

interface ScrollDownButtonProps {
  targetRef: RefObject<HTMLDivElement | null>;
}

export const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({
  targetRef,
}) => {
  const handleClick = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className={styles.scrollDownBtn} onClick={handleClick}>
      ↓
    </button>
  );
};
