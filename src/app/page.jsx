import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6">
      <h1 className="text-5xl font-bold mb-6 text-indigo-600">
        Hooksmith – Landing Page AI
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-10">
        Inserisci il tuo prodotto e ottieni subito <b>headline</b> e <b>subhead</b> pronte per la tua landing.
      </p>
      <div className="flex gap-4">
        <Link
          href="/studio"
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Prova Gratis
        </Link>
        <Link
          href="/terms"
          className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Scopri di più
        </Link>
      </div>
    </section>
  );
}
