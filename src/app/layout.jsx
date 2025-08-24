import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Hooksmith",
  description: "Genera headline e subhead vincenti per la tua landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
