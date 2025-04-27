import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Summarize the following text in a concise way:",
          },
          {
            role: "user",
            content: text,
          },
        ],
        temperature: 0.5,
      }),
    });

    const data = await response.json();
    console.log("DEBUG: ", JSON.stringify(data));
    const summary = data.choices[0]?.message?.content || "OpenAI error: check your key or quota.";

    return NextResponse.json({ summary });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to summarize text." }, { status: 500 });
  }
}