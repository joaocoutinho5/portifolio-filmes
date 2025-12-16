"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Background1 from "@/app/assets/bg1.jpg";
import Background2 from "@/app/assets/bg2.jpg";
import Background3 from "@/app/assets/bg3.jpg";
import Background4 from "@/app/assets/bg4.jpg";
import { BtnExplore, BtnAbout } from "./components/buttons";

export default function Home() {
  const Images = [Background1, Background2, Background3, Background4];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [Images.length]);

  return (
    <div className="relative w-full flex justify-center items-start text-center pt-55 overflow-hidden">
      {/* Background slideshow */}
      {Images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            width={1920}
            height={1080}
            src={img}
            alt={`Background ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay para deixar o texto legível */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-start text-center">
        <div className="w-full h-full flex flex-col justify-center items-center bg-[#141414]/70">
          {/* Container para titulo e descrição */}
          <section className="w-[85%] md:w-[50%] h-full flex flex-col items-center justify-center gap-10 fade-down">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Portifolio de Filmes
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#999999] leading-relaxed">
              <b>CoutinhoFlix</b> é um catálogo de filmes desenvolvido com
              Next.js para praticar o consumo de APIs e conceitos modernos de
              desenvolvimento web. Aqui você encontra informações sobre filmes,
              gêneros, avaliações e muito mais — tudo carregado dinamicamente
              por meio de integrações com serviços externos.
            </p>
            {/* Botões */}
            <div className="flex flex-col md:flex-row gap-4">
              <BtnExplore />
              <BtnAbout />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
