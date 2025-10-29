import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const userStates = new Map<
  string,
  { quote: string; step: "waiting_username" }
>();

export async function POST(request: NextRequest) {
  try {
    const update = await request.json();

    if (!update.message) {
      return NextResponse.json({ ok: true });
    }

    const msg = update.message;
    const chatId = msg.chat.id;
    const text = msg.text;
    const userId = String(msg.from?.id);

    if (text === "/start") {
      await sendMessage(
        chatId,
        `Привет, ${msg.from?.username}!\n\nНапиши цитату которая появится на сайте`
      );
      return NextResponse.json({ ok: true });
    }

    if (text === "/new") {
      if (userStates.has(userId)) {
        userStates.delete(userId);
      }
      await sendMessage(chatId, "Напишите новую цитату:");
      return NextResponse.json({ ok: true });
    }

    if (text === "/cancel") {
      if (userStates.has(userId)) {
        userStates.delete(userId);
        await sendMessage(chatId, "Отменено");
      }
      return NextResponse.json({ ok: true });
    }

    if (!text || text.startsWith("/")) {
      return NextResponse.json({ ok: true });
    }

    if (userStates.has(userId)) {
      const savedData = userStates.get(userId)!;

      try {
        await prisma.user.upsert({
          where: { telegramId: userId },
          update: {
            quote: savedData.quote,
            quoteTime: new Date(),
            quoteUsername: text,
          },
          create: {
            telegramId: userId,
            username: msg.from?.username || "Анон",
            quote: savedData.quote,
            quoteTime: new Date(),
            quoteUsername: text,
          },
        });

        userStates.delete(userId);
        await sendMessage(chatId, "Цитата сохранена");
      } catch {
        await sendMessage(chatId, "Ошибка сохранения");
      }
    } else {
      try {
        const existingUser = await prisma.user.findUnique({
          where: { telegramId: userId },
        });

        if (existingUser) {
          await sendMessage(
            chatId,
            `У вас уже есть цитата: "${existingUser.quote}" — ${existingUser.quoteUsername}\n\nДля создания новой цитаты напишите /new`
          );
        } else {
          userStates.set(userId, { quote: text, step: "waiting_username" });
          await sendMessage(
            chatId,
            "Отправьте ник который будет отображаться на сайте\n\nДля отмены напишите /cancel"
          );
        }
      } catch {
        await sendMessage(chatId, "Ошибка проверки данных");
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

async function sendMessage(chatId: number, text: string) {
  const token = process.env.BOT_API_TOKEN;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
    }),
  });
}
