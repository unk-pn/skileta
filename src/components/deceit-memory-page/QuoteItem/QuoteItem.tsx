import React from "react";
import styles from "./QuoteItem.module.css";

interface QuoteItemProps {
  text: string;
  author?: string;
}

export const QuoteItem: React.FC<QuoteItemProps> = ({ text, author }) => {
  return (
    <blockquote className={styles.quote}>
      <p className={styles.text}>&#34;{text}&#34;</p>
      {author && <footer className={styles.author}>— {author}</footer>}
    </blockquote>
  );
};
