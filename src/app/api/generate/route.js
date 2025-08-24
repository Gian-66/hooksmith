import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { idea } = await req.json();

    if (!idea) {
      return NextResponse.json(
        { error: "Manca il campo 'idea'" },
        { status: 400 }
      );
    }

    const prompt = `
Sei un copywriter pubblicitario. 
Genera 3 proposte di headline accattivanti e brevi (max 8 parole) con relative subhead esplicative, 
pensate per una landing page che promuove questa idea: "${idea}".

Rispondi in formato JSON, array di oggetti con "headline" e "subhead".
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // puoi anche usare gpt-4o o gpt-3.5-turbo
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
      }),
    });

    const data = await response.json();

    let hooks = [];
    try {
      hooks = JSON.parse(data.choices[0].message.content);
    } catch (err) {
      console.error("Parsing JSON fallito:", err);
    }

    return NextResponse.json({ hooks });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Errore nel server" },
      { status: 500 }
    );
  }
}
