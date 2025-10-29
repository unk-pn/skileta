import TelegramBot from "node-telegram-bot-api";
import { PrismaClient } from "@prisma/client";

const token = process.env.BOT_API_TOKEN;

const bot = new TelegramBot(token, { polling: true });
const prisma = new PrismaClient();
const userStates = new Map();

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  if (match && match[1]) {
    bot.sendMessage(chatId, match[1]);
  }
});

bot.onText(/\/start/, (msg) => {
  const userId = String(msg.from?.id);
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `Привет, ${msg.from?.username}!\nНапиши цитату которая появится на сайте`
  );
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const userId = String(msg.from?.id);

  if (!text || text.startsWith("/")) return 

  if (userStates.has(userId)) {
    const savedData = userStates.get(userId);

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
      bot.sendMessage(chatId, "Цитата сохранена")
    } catch {
      bot.sendMessage(chatId, `Ошибка сохранения`);
    }
  } else {
    userStates.set(userId, { quote: text, step: 'waiting_username' })
    bot.sendMessage(chatId, 'Отправьте ник который будет отображаться на сайте\nДля отмены напишите /cancel')
  }
});

bot.onText(/\/cancel/, (msg) => {
  const userId = String(msg.from?.id);
  const chatId = msg.chat.id;
  if (userStates.has(userId)) {
    userStates.delete(userId)
    bot.sendMessage(chatId, "Отменено")
  }
});