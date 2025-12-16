import MovieNF from "@/app/components/movie-nf";
import Image from "next/image";

import { Film, Calendar, Clock, Star } from "lucide-react";
import { BtnBack } from "@/app/components/buttons";

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

interface Genre {
  id: number;
  name: string;
}

interface Video {
  id: string;
  key: string;
  site: string;
  type: string;
  name: string;
}

export default async function MovieDetails({ params }: MoviePageProps) {
  const { id } = await params;

  const BASE = process.env.TMDB_BASE;
  const TOKEN = process.env.NEXT_PUBLIC_TMDB_TOKEN;

  const res = await fetch(
    `${BASE}/movie/${id}?append_to_response=videos&language=pt-BR`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    return <MovieNF />;
  }

  const movie = await res.json();

  const trailer = movie.videos?.results?.find(
    (v: Video) => v.type === "Trailer" && v.site === "YouTube"
  );

  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  return (
    <main className="w-full min-h-screen text-white mb-6 pb-[70px]">
      {/* BACKDROP */}
      {movie.backdrop_path && (
        <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden p-0 m-0">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0b0b0b] to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-[#0b0b0b]/40 to-transparent" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[1560px] px-5">
            <div className="flex flex-col gap-4 fade-down">
              <BtnBack />

              {/* TÍTULO */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                {movie.title}
              </h1>

              {/* DATA, DURAÇÃO, NOTA */}
              <div className="flex gap-4 text-md md:text-[15px] lg:text-[17px]">
                <p className="flex items-center gap-2 text-[#999999]">
                  <Calendar size={18} />{" "}
                  {new Date(movie.release_date).toLocaleDateString("pt-BR")}
                </p>
                <p className="flex items-center gap-2 text-[#999999]">
                  <Clock size={18} /> {hours}h {minutes}min
                </p>
                <p className="flex items-center gap-2">
                  <Star
                    size={18}
                    fill="currentColor"
                    className="text-[#e50914]"
                  />
                  <strong>{movie.vote_average?.toFixed(1)}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="w-full max-w-[1560px] mx-auto flex flex-col justify-center items-center mt-10 px-5 fade-down">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            {/* COLUNA ESQUERDA */}
            <div className="space-y-6">
              {/* GÊNEROS */}
              <div className="flex flex-wrap gap-2">
                {movie.genres?.map((g: Genre, index: number) => (
                  <span
                    key={index}
                    className="bg-[#1f1f1f]/60 px-2.5 py-1 rounded-xl text-[0.85rem] flex items-center gap-2"
                  >
                    <Film size={15} /> {g.name}
                  </span>
                ))}
              </div>

              {/* SINOPSE */}
              <section>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">
                  Sinopse
                </h2>
                <p className="text-md md:text-[16px] lg:text-lg text-[#999999] leading-relaxed">
                  {movie.overview || "Sem sinopse disponível."}
                </p>
              </section>

              {/* TRAILER */}
              {trailer && (
                <div className="mt-8">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">
                    Trailer
                  </h2>
                  <section className="w-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${trailer.key}?rel=0&modestbranding=1&controls=1`}
                      className="w-full h-full poster"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </section>
                </div>
              )}
            </div>

            {/* COLUNA DIREITA */}
            <div className="w-full flex lg:justify-end lg:pr-8">
              <div className="w-full flex flex-col gap-10">
                {/* POSTER */}
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  width={800}
                  height={1200}
                  className="w-full h-auto poster"
                />

                {/* CARD DE INFORMAÇÕES */}
                <section className="w-full p-6 bg-[#141414] border border-[#2e2e2e] rounded-xl flex flex-col gap-3">
                  <h2 className="font-bold text-lg">Informações</h2>

                  <div className="text-md">
                    <p className="text-[#999999]">Título Original:</p>
                    <h3 className="text-white">{movie.title}</h3>
                  </div>

                  <div className="text-md">
                    <p className="text-[#999999]">Ano de Lançamento:</p>
                    <h3 className="text-white">
                      {new Date(movie.release_date).getFullYear()}
                    </h3>
                  </div>

                  <div className="text-md">
                    <p className="text-[#999999]">Duração:</p>
                    <h3 className="text-white">
                      {hours}h {minutes}min
                    </h3>
                  </div>

                  <div className="text-md">
                    <p className="text-[#999999]">Gênero:</p>
                    <h3 className="text-white">
                      {movie.genres?.map((g: Genre) => g.name).join(", ")}
                    </h3>
                  </div>

                  <div className="text-md">
                    <p className="text-[#999999]">Avaliação:</p>
                    <h3 className="flex items-center gap-1 text-[#999999]">
                      <Star
                        size={20}
                        fill="currentColor"
                        className="text-[#e50914]"
                      />
                      <strong className="text-white text-xl">
                        {movie.vote_average?.toFixed(1)}
                      </strong>
                      /10
                    </h3>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
