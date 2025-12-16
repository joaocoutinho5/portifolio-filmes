import "./globals.css";
import { Inter } from 'next/font/google';
import Footer from "./components/footer";
import Navbar from "./components/navBar";
import { Metadata } from "next";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "CoutinhoFlix",
  description: "Site de listagem de filmes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#0b0b0b]`}>
        {/* NAVBAR WRAPPER */}
        <div className="w-full sticky top-0 left-0 z-50 bg-[#0b0b0b]/80 backdrop-blur-sm shadow border-b border-[#2E2E2E]">
          {/* NAVBAR CONTENT - segue o max-width */}
          <div className="max-w-[1560px] mx-auto px-5">
            <Navbar />
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="w-full min-h-[calc(100vh-64px)] mx-auto flex justify-center">{children}</div>

        {/* FOOTER WRAPPER */}
        <div className="w-full bg-[#141414] border-t border-[#2E2E2E]">
          <div className="max-w-[1560px] mx-auto px-5">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
