"use client";
import { useState } from "react";
import HookCard from "@/components/HookCard";

export default function Studio() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [hooks, setHooks] = useState([]);
  const [error, setError] = useState("");

  const generateHooks = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setHooks([]);
    setError("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });

      const data = await res.json();

      if (res.ok && data.hooks?.length) {
        setHooks(data.hooks);
      } else {
        setError("Errore nella generazione. Riprova.");
      }
    } catch (err) {
      console.error(err);
      setError("Errore di connessione al server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600 text-center">
        Genera i tuoi Hook ✨
      </h1>

      <div className="flex gap-3 mb-6">
        <input
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Descrivi il tuo prodotto..."
          className="flex-1 border rounded-xl px-4 py-3"
        />
        <button
          onClick={generateHooks}
          disabled={loading || !idea}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Generando..." : "Genera"}
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {hooks.length > 0 && (
        <div className="grid gap-4">
          {hooks.map((h, i) => (
            <HookCard key={i} headline={h.headline} subhead={h.subhead} />
          ))}
        </div>
      )}
    </section>
  );
}
