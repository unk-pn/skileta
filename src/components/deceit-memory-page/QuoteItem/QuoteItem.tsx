import React from "react";
import c from "./QuoteItem.module.css";

interface QuoteItemProps {
  text: string;
  author?: string;
}

export const QuoteItem: React.FC<QuoteItemProps> = ({ text, author }) => {
  return (
    <blockquote className={c.quote}>
      <p className={c.text}>&#34;{text}&#34;</p>
      {author && (
        <footer
          className={c.author}
          dangerouslySetInnerHTML={{ __html: `— ${author}` }}
        />
      )}
    </blockquote>
  );
};
