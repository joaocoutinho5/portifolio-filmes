"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Film } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "font-semibold text-[#e50914] hover:opacity-70 transition" //Active
      : "font-semibold text-white hover:opacity-70 transition"; //Default

  return (
    //NavBar Wrapper
    <header className="w-full sticky top-0 left-0 z-50 bg-[#0b0b0b]/80 backdrop-blur-sm shadow border-b border-[#2E2E2E] py-4">
      <nav className="max-w-[1560px] mx-auto px-5 flex items-center justify-between">
        {/* Nome do projeto (Link para Home) */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-70 transition"
        >
          <Film size={24} className="text-[#e50914]" />{" "}
          <h1 className="font-bold text-white text-2xl">CoutinhoFlix</h1>
        </Link>

        {/* Links da direita */}
        <div className="text-md flex items-center gap-6">
          <Link href="/" className={linkClass("/")}>
            Início
          </Link>
          <Link href="/movies" className={linkClass("/movies")}>
            Filmes
          </Link>
        </div>
      </nav>
    </header>
  );
}
