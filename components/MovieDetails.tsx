import { MovieDetail } from "../types";
import Image from "next/image";
import imageLoader from "../imageLoader";

export const MovieDetails = ({ movie }: { movie: MovieDetail }) => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-neutral-800 p-5">
        <Image
          loader={imageLoader}
          unoptimized
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          width="100"
          height="100"
          layout="responsive"
        />
        <div className="ml-5 text-white p-5">
          <h1 className="font-bold text-4xl mb-1">{movie.title}</h1>
          <div className="flex">
            <p className="mr-5 ">{movie.release_date}</p>

            {movie.genres.map((genre, index) => (
              <span key={index}>{(index ? ", " : "") + genre.name}</span>
            ))}
            <p className="ml-5">{`${Math.floor(movie.runtime / 60)}h ${
              movie.runtime % 60
            }m`}</p>
          </div>
          <div className="flex mt-5">
            <p className="bg-yellow-500 text-black rounded-full p-4 font-bold text-xl">
              {movie.vote_average}
            </p>{" "}
            <p className="ml-5 align-middle flex items-center">User Score</p>
          </div>
          <div className="mt-5">
            <h3 className="mb-1 font-bold">Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <div className="mt-5 flex">
            <p className="mr-2">Spoken Languages:</p>
            {movie.spoken_languages.map((language, index) => (
              <span key={index}>
                {(index ? ", " : "") + language.english_name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
