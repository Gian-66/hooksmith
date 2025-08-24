"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-white shadow-md sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-indigo-600">
        Hooksmith
      </Link>
      <nav className="flex gap-6">
        <Link href="/studio" className="hover:text-indigo-600">Studio</Link>
        <Link href="/privacy" className="hover:text-indigo-600">Privacy</Link>
        <Link href="/terms" className="hover:text-indigo-600">Termini</Link>
      </nav>
    </header>
  );
}
