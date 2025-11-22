import TelegramBot from "node-telegram-bot-api";

export default async function handler(req, res) {
  const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: false });

  if (req.method === "POST") {
    const { message } = req.body;

    if (message?.text) {
      await bot.sendMessage(message.chat.id, "Webhook працює! ✌️");
    }
  }

  res.status(200).json({ ok: true });
}
