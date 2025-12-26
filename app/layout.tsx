import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navBar";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body
        className={`${inter.className} min-h-screen w-full flex flex-col bg-[#0b0b0b]`}
      >
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="w-full min-h-[calc(100vh-64px)] mx-auto flex justify-center">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
