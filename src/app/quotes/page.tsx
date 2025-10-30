"use client";

import { QuoteItem } from "@/components/deceit-memory-page/QuoteItem/QuoteItem";
import React, { useEffect, useState } from "react";
import c from "./quotes.module.css";

type Quote = {
  id: string;
  telegramId: string;
  username?: string;
  createdAt: Date;
  updatedAt: Date;
  quote: string;
  quoteUsername: string;
  quoteTime: string;
};

const Quotes = () => {
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState<Quote[] | undefined>();

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/quotes");
        const data = await res.json();

        setQuotes(data);
      } catch (error) {
        console.log("Error loading quotes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div className={c.container}>
      <div className={c.header}>
        <h1 className={c.title}>Quotes</h1>
      </div>

      {loading && (
        <div className={c.loadingContainer}>
          <div className={c.loader}></div>
        </div>
      )}

      {quotes && quotes.length > 0 && (
        <div className={c.quotesGrid}>
          {quotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              text={quote.quote}
              author={quote.quoteUsername}
            />
          ))}
        </div>
      )}

      <div className={c.botSection}>
        <h2 className={c.botTitle}>Хотите добавить свою цитату?</h2>
        <a
          // href="https://t.me/skileta_quote_bot"
          href="https://t.me/skileta_bot"
          target="_blank"
          rel="noopener noreferrer"
          className={c.botLink}
        >
          <img
            src="/telegram-logo.png"
            alt="tg logo"
            className={c.telegramIcon}
          />
          Написать боту
        </a>
      </div>
    </div>
  );
};

export default Quotes;
