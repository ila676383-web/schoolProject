import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  if (!text || typeof text !== "string") {
    return NextResponse.json({ error: "text required" }, { status: 400 });
  }

  const token = process.env.BOT_TOKEN;
  const chatId = process.env.GROUP_ID || process.env.GROUP_TOKEN;

  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Missing BOT_TOKEN or GROUP_ID/GROUP_TOKEN in env" },
      { status: 500 }
    );
  }

  const tgRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    }
  );

  const data = await tgRes.json();
  return NextResponse.json(data, { status: tgRes.status });
}
