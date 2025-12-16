"use client";

import {
  useEffect,
  useState,
  useRef,
  useCallback,
  startTransition,
} from "react";
import MovieCard from "../components/movieCard";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

interface MovieResponse {
  results: Movie[];
  page: number;
  total_pages: number;
}

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadMovies = useCallback(async () => {
    if (loading || !hasMore) return;

    startTransition(() => {
      setLoading(true);
    });

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
        },
      }
    );

    const data: MovieResponse = await res.json();

    if (page > 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    startTransition(() => {
      setMovies((prev) => {
        const all = [...prev, ...data.results];
        const unique = all.filter(
          (movie, index, self) =>
            index === self.findIndex((m) => m.id === movie.id)
        );
        return unique;
      });
      setHasMore(page < data.total_pages);
      setLoading(false);
    });
  }, [page, loading, hasMore]);

  // Carregar filmes quando a página mudar
  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  // IntersectionObserver para carregar mais
  useEffect(() => {
    const element = observerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <main className="body fade-down">
      {/* Cabeçalho */}
      <header className="w-full flex flex-col justify-center items-start mb-8">
        <h1 className="text-white text-2xl md:text-3xl lg:text-3xl font-bold pb-2">
          Lista de Filmes
        </h1>
        <p className="text-[#999999] text-md md:text-lg">
          Uma coleção com ótimos filmes
        </p>
      </header>

      {/* Lista */}
      <section className="w-full flex justify-center px-1">
        <div className="cardContainer">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              description={movie.overview}
              poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              year={movie.release_date?.slice(0, 4)}
            />
          ))}
        </div>
      </section>

      {/* Sentinela para o IntersectionObserver */}
      <div ref={observerRef} className="h-10"></div>

      {/* Loading só quando já existem filmes */}
      <p className="text-[#999999] text-md md:text-lg text-center animate-pulse">
        Carregando filmes...
      </p>
    </main>
  );
}
