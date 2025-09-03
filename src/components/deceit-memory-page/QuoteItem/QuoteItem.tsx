import React from "react";
import styles from "./QuoteItem.module.css";

interface QuoteItemProps {
  text: string;
  author?: string;
}

export const QuoteItem: React.FC<QuoteItemProps> = ({ text, author }) => {
  return (
    <blockquote className={styles.quote}>
      <p className={styles.text}>"{text}"</p>
      {author && <footer className={styles.author}>— {author}</footer>}
    </blockquote>
  );
};
