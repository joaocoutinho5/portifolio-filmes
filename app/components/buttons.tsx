"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Info, Play, ArrowLeft } from "lucide-react";

export function BtnExplore() {
  return (
    <Link
      href="/movies"
      className="flex justify-center items-center gap-3 bg-[#e50914] border-2 border-[#e50914] rounded-full hover:shadow-[0_0_30px_1px_rgba(229,9,20,0.35)] px-8 py-3 transition"
    >
      <Play className="text-white size-[15px] md:size-[17px]" />
      <h1 className="text-white text-[15px] md:text-[17px] font-bold">
        Explorar Coleção
      </h1>
    </Link>
  );
}

export function BtnAbout() {
  return (
    <Link
      href="/about"
      className="flex justify-center items-center gap-3 bg-[#141414]/65 border-2 border-[#2E2E2E]/65 hover:border-[#2E2E2E]/35 rounded-full px-8 py-3 transition"
    >
      <Info className="text-white size-[15px] md:size-[17px]" />
      <h1 className="text-white text-[15px] md:text-[17px] font-bold">
        Sobre o Projeto
      </h1>
    </Link>
  );
}

export function BtnBack() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="w-fit flex items-center gap-2 text-md md:text-[17px] font-bold hover:bg-[#2E2E2E]/40 rounded-2xl py-2 pl-3 pr-4 transition"
    >
      <ArrowLeft size={18} />
      Voltar
    </button>
  );
}
