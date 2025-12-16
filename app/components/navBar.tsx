"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Film } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "font-semibold text-[#e50914] hover:opacity-70 transition" //active
      : "font-semibold text-white hover:opacity-70 transition"; //default

  return (
    <header className="w-full py-4 flex justify-center items-center z-50">
      <nav className="w-full flex items-center justify-between">
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
