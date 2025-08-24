import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { idea } = await req.json();
    if (!idea) return NextResponse.json({ error: "Idea mancante" }, { status: 400 });

    const prompt = `Genera 3 headline e subhead brevi per questa idea: "${idea}" in JSON [{headline, subhead}]`;

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
      }),
    });

    const data = await res.json();
    let hooks = [];
    try {
      hooks = JSON.parse(data.choices[0].message.content);
    } catch {
      hooks = [
        { headline: `Scopri ${idea}`, subhead: "Fallback headline" },
        { headline: `${idea} ora`, subhead: "Fallback subhead" },
      ];
    }

    return NextResponse.json({ hooks });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Errore server" }, { status: 500 });
  }
}
