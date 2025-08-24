import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { idea } = await req.json();

    if (!idea || !idea.trim()) {
      return NextResponse.json(
        { error: "Devi inserire un’idea" },
        { status: 400 }
      );
    }

    const prompt = `
Sei un copywriter professionista. 
Genera 3 headline brevi (max 8 parole) e 3 subhead descrittive per questa idea: "${idea}".
Rispondi in JSON, array di oggetti con "headline" e "subhead".
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
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

    const data = await response.json();

    // Parsing sicuro del JSON generato dall'AI
    let hooks = [];
    try {
      const text = data.choices?.[0]?.message?.content || "[]";
      hooks = JSON.parse(text);
    } catch (err) {
      console.error("Parsing JSON fallito:", err);
      hooks = [
        {
          headline: `Scopri ${idea} subito`,
          subhead: "Un modo semplice per ottenere risultati concreti.",
        },
        {
          headline: `${idea} come mai prima`,
          subhead: "Genera valore immediato con questa soluzione.",
        },
      ]; // fallback
    }

    return NextResponse.json({ hooks });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    );
  }
}
