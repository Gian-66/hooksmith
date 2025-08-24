import Link from "next/link";

export default function Success() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-10 bg-green-50">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        ✅ Grazie per aver acquistato Hooksmith Pro!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Ora puoi generare hook illimitati 🚀
      </p>
      <Link
        href="/studio"
        className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
      >
        Vai allo Studio
      </Link>
    </section>
  );
}
