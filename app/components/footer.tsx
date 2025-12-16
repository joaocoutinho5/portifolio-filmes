import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full text-[#999999] py-4">
      <div className="w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-0">
        <p className="text-md text-center md:text-left flex flex-row items-center gap-1">
          Criado com{" "}
          <Heart size={20} fill="currentColor" className="text-[#e50914]" /> por{" "}
          <b>João Pedro Coutinho</b>
        </p>

        {/* Links */}
        <nav className="flex items-center gap-6 text-sm">
          <Link href="" className="hover:text-white transition" target="_blank">
            Portfólio
          </Link>
          <Link
            href="https://www.linkedin.com/in/joaocoutinho5"
            className="hover:text-white transition"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/joaocoutinho5"
            className="hover:text-white transition"
            target="_blank"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </footer>
  );
}
