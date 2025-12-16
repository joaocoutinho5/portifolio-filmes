"use client";

import Image from "next/image";
import Link from "next/link";

type MovieCardProps = {
  id: number;
  title: string;
  description: string;
  poster: string;
  year: string;
};

export default function MovieCard({
  id,
  title,
  description,
  poster,
  year,
}: MovieCardProps) {
  return (
    <div className="card">
      <Link href={`/movies/${id}`} className="w-full h-full">
        <div className="w-full aspect-2/3">
          <Image
            width={300}
            height={450}
            src={poster}
            alt={`Poster de "${title}"`}
            className="text-white w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col px-4 py-3">
          <h2 className="text-white text-xl font-bold line-clamp-1 mb-1 md:mb-2">
            {title}
          </h2>
          <p className="text-[#999999] text-sm mb-1 md:mb-2">{year}</p>
          <p className="text-[#999999] text-sm line-clamp-2 md:line-clamp-3">{description}</p>
        </div>
      </Link>
    </div>
  );
}
