import { FaCss3Alt, FaYoutube, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiLucide, SiThemoviedatabase } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const technologies = [
  {
    name: "Next.js + TypeScript",
    description:
      "Framework que estende o React, usado para construir o site com alta performance e código mais seguro.",
    icon: TbBrandNextjs,
  },
  {
    name: "Tailwind CSS",
    description:
      "Framework de estilos utilitários para criar layouts rápidos e responsivos.",
    icon: RiTailwindCssFill,
  },
  {
    name: "CSS Module",
    description:
      "Método de estilização que mantém o CSS organizado e sem conflitos.",
    icon: FaCss3Alt,
  },
  {
    name: "Lucide Icons + React Icons",
    description: "Bibliotecas de ícones leves e modernos usados na interface.",
    icon: SiLucide,
  },
  {
    name: "TMDB Api",
    description:
      "Fonte dos dados dos filmes exibidos no site (títulos, sinopses, posters, etc.).",
    icon: SiThemoviedatabase,
  },
  {
    name: "YouTube Embed",
    description:
      "Recurso usado para incorporar o trailer oficial dos filmes via iframe.",
    icon: FaYoutube,
  },
  {
    name: "Node.js",
    description:
      "Ambiente que executa o Next.js e realiza o processamento do projeto.",
    icon: FaNodeJs,
  },
  {
    name: "Visual Studio Code",
    description: "Editor de código utilizado durante todo o desenvolvimento.",
    icon: VscVscode,
  },
];