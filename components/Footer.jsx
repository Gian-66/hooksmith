import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} Hooksmith ·{" "}
        <Link href="/privacy" className="hover:text-indigo-600">Privacy</Link> ·{" "}
        <Link href="/terms" className="hover:text-indigo-600">Termini</Link>
      </p>
    </footer>
  );
}
