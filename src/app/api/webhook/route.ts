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

    if (update.callback_query) {
      const callbackQuery = update.callback_query;
      const callbackData = callbackQuery.data;
      const moderatorChatId = callbackQuery.message.chat.id;
      const messageId = callbackQuery.message.message_id;

      if (
        callbackData.startsWith("approve_") ||
        callbackData.startsWith("reject_")
      ) {
        const action = callbackData.startsWith("approve_")
          ? "approve"
          : "reject";
        const userId = callbackData.split("_")[1];

        try {
          if (action === "approve") {
            const user = await prisma.user.update({
              where: { telegramId: userId },
              data: { isApproved: true },
            });
            await sendMessage(
              parseInt(user.chatId),
              "Ваша цитата одобрена и опубликована!"
            );

            await editMessage(moderatorChatId, messageId, "Цитата одобрена.");
          } else {
            const user = await prisma.user.findUnique({
              where: { telegramId: userId },
            });
            if (user) {
              await sendMessage(
                parseInt(user.chatId),
                "Ваша цитата отклонена модератором."
              );

              await prisma.user.delete({
                where: { telegramId: userId },
              });

              await editMessage(
                moderatorChatId,
                messageId,
                "Цитата отклонена."
              );
            }
          }
          await answerCallbackQuery(
            callbackQuery.id,
            `Цитата ${action === "approve" ? "одобрена" : "отклонена"}`
          );
        } catch {
          await answerCallbackQuery(callbackQuery.id, "Ошибка при обработке");
        }
      }
      return NextResponse.json({ ok: true });
    }

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
        `Привет, ${msg.from?.username}!\n\nДля создания цитаты напишите /new\nДля помощи напишите /info`
      );
      return NextResponse.json({ ok: true });
    }

    if (text === "/new") {
      if (userStates.has(userId)) {
        userStates.delete(userId);
      }
      await sendMessage(chatId, "Напишите цитату:");
      return NextResponse.json({ ok: true });
    }

    if (text === "/cancel") {
      if (userStates.has(userId)) {
        userStates.delete(userId);
        await sendMessage(chatId, "Отменено");
      }
      return NextResponse.json({ ok: true });
    }

    if (text === "/delete") {
      try {
        const hasQuote = await prisma.user.findUnique({
          where: {
            telegramId: userId,
          },
        });
        if (hasQuote && hasQuote.quote) {
          await prisma.user.delete({
            where: {
              telegramId: userId,
            },
          });
        }
        await sendMessage(chatId, "Ваша цитата удалена");
      } catch {
        await sendMessage(
          chatId,
          "Ошибка удаления цитаты. У вас она точно есть?"
        );
      }
      return NextResponse.json({ ok: true });
    }

    if (text === "/info") {
      await sendMessage(
        chatId,
        "Напиши мне цитату и она появится на skileta.ru/quotes!\n\nДля написания новой цитаты напишите /new\nДля отмены написания цитаты напишите /cancel\nДля удаления своей цитаты напишите /delete"
      );
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
            isApproved: false,
          },
          create: {
            telegramId: userId,
            username: msg.from?.username || "Анон",
            chatId: String(chatId),
            quote: savedData.quote,
            quoteTime: new Date(),
            quoteUsername: text,
            isApproved: false,
          },
        });

        userStates.delete(userId);
        await SendMessageToModerator(
          savedData.quote,
          text,
          msg.from?.username,
          userId
        );
        await sendMessage(chatId, "Цитата отправлена на модерацию!");
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
          await sendMessage(
            chatId,
            "Для создания цитаты напишите команду /new"
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

async function SendMessageToModerator(
  quote: string,
  quoteUsername: string,
  username: string,
  userId: string
) {
  const moderator1ChatId = process.env.MODERATOR1_CHAT_ID;
  const moderator2ChatId = process.env.MODERATOR2_CHAT_ID;
  const token = process.env.BOT_API_TOKEN;

  const keyboard = {
    inline_keyboard: [
      [
        {
          text: "Одобрить",
          callback_data: `approve_${userId}`,
        },
        {
          text: "Отклонить",
          callback_data: `reject_${userId}`,
        },
      ],
    ],
  };

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: moderator1ChatId,
      text: `🔍 Новая цитата на модерацию:\n\n"${quote}" — ${quoteUsername}\n\nНаписал: @${username}`,
      reply_markup: keyboard,
    }),
  });
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: moderator2ChatId,
      text: `🔍 Новая цитата на модерацию:\n\n"${quote}" — ${quoteUsername}\n\nНаписал: @${username}`,
      reply_markup: keyboard,
    }),
  });
}

async function editMessage(chatId: number, messageId: number, text: string) {
  const token = process.env.BOT_API_TOKEN;
  await fetch(`https://api.telegram.org/bot${token}/editMessageText`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      message_id: messageId,
      text: text,
    }),
  });
}

async function answerCallbackQuery(callbackQueryId: string, text: string) {
  const token = process.env.BOT_API_TOKEN;
  await fetch(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      callback_query_id: callbackQueryId,
      text: text,
    }),
  });
}
