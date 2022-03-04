import { Movies } from "../types";
import Image from "next/image";
import Link from "next/link";
import imageLoader from "../imageLoader";
import { useRouter } from "next/router";

const MoviesContainer = ({ movies }: { movies: Movies[] }) => {
  const router = useRouter();
  return (
    <>
      {console.log(router.query)}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center p-5">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <Link href={`/movies/${movie.id}`}>
                <div className="bg-white cursor-pointer rounded-md shadow-sm">
                  <Image
                    loader={imageLoader}
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    width="270"
                    height="350"
                  />
                  <div className="px-6 py-2">
                    <h3 className="font-bold text-xl mb-1">{movie.title} </h3>
                    <p className="text-gray-700 text-base mb-1">
                      {movie.release_date}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MoviesContainer;
