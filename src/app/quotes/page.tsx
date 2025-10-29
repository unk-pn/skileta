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
    <div>
      {loading && <div className={c.loader}></div>}
      {quotes &&
        quotes.map((quote) => (
          <QuoteItem
            key={quote.username}
            text={quote.quote}
            author={quote.username}
          />
        ))}
        <div>
          <h1>Хотите выложить свою цитату?</h1>
          <p>Отправьте свою цитату в телеграм бота: <a href="https://t.me/skileta_bot" target="_blank">@skileta_bot</a></p>
        </div>
    </div>
  );
};

export default Quotes;
