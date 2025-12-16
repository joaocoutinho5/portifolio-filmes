import { technologies } from "../data/technologies";

export default function About() {
  return (
    <main className="body flex justify-center fade-down">
      <div className="text-white flex flex-col gap-12 pt-12">
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
            Sobre o Projeto
          </h1>
          <span className="w-25 h-1 bg-[#e50914] rounded-full" />
        </div>
        {/* Seção da Descrição */}
        <section className="w-full flex flex-col justify-center gap-6">
          <h2 className="text-2xl font-bold">Visão Geral</h2>
          <div className="text-[#999999] flex flex-col gap-4 leading-relaxed">
            <p>
              Este projeto nasceu da paixão pelo cinema e pela tecnologia.
              Trata-se de um portfólio visual interativo desenvolvido para
              catalogar e apresentar uma seleção filmes, combinando uma estética
              moderna inspirada em plataformas de streaming como Netflix e HBO
              Max.
            </p>
            <p>
              A aplicação foi construída com foco na experiência do usuário,
              oferecendo navegação fluida, animações sutis e um design
              responsivo que se adapta perfeitamente a qualquer dispositivo.
              Cada detalhe foi pensado para proporcionar uma experiência
              cinematográfica imersiva, desde a transição suave dos backgrounds
              até os efeitos hover nos cards de filmes.
            </p>
            <p>
              O objetivo principal era criar uma vitrine elegante que não apenas
              exibisse informações sobre os filmes, mas que também transmitisse
              a atmosfera única que cada obra representa. A paleta de cores
              escura com acentos em vermelho foi escolhida especificamente para
              remeter ao ambiente de uma sala de cinema.
            </p>
          </div>
        </section>
        {/* Seção das Tecnologias */}
        <section className="w-full flex flex-col justify-center gap-6">
          <h2 className="text-2xl font-bold">
            Principais Tecnologias Utilizadas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl bg-[#141414]/60 border border-[#2E2E2E]/60 flex"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-[#e50914]/10 text-[#e50914]">
                    <tech.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{tech.name}</h3>
                    <p className="text-sm text-[#999999]">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Seção da Arquitetura */}
        <section className="w-full flex flex-col justify-center gap-6">
          <h2 className="text-2xl font-bold">Arquitetura</h2>
          <p className="text-[#999999] leading-relaxed">
            A estrutura do projeto segue as melhores práticas de desenvolvimento
            React moderno, com componentes organizados de forma modular e
            reutilizável. A separação clara entre componentes de UI, páginas e
            utilitários facilita a manutenção e expansão do código. O sistema de
            design foi implementado utilizando variáveis CSS customizadas em
            conjunto com Tailwind CSS, permitindo uma experiência de theming
            consistente em toda a aplicação. Isso garante que mudanças visuais
            possam ser feitas de forma centralizada, mantendo a coerência visual
            do projeto.
          </p>
        </section>
        {/* Seção das Funcionalidades */}
        <section className="w-full flex flex-col justify-center gap-6">
          <h2 className="text-2xl font-bold">Funcionalidades</h2>
          <ul className="space-y-3 text-[#999999]">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 shrink-0 rounded-full bg-[#e50914]" />
              Página inicial com slideshow animado de posters.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 shrink-0 rounded-full bg-[#e50914]" />
              Galeria responsiva de filmes com efeitos hover.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 shrink-0 rounded-full bg-[#e50914]" />
              Carregamento automático de filmes ao alcançar o final da página.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 shrink-0 rounded-full bg-[#e50914]" />
              Página de detalhes com sinopse, gêneros, avaliação e trailer.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 shrink-0 rounded-full bg-[#e50914]" />
              Design responsivo para todos os dispositivos.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 shrink-0 rounded-full bg-[#e50914]" />
              Uso de animações suaves de entrada e transições visuais elegantes para tornar a navegação mais fluida e agradável.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 shrink-0 rounded-full bg-[#e50914]" />
              Tema escuro cinematográfico com acentos em vermelho.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
