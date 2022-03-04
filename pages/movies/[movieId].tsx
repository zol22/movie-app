import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { GetMovieResults, MovieDetail } from "../../types";
import { server } from "../../config";
import { MovieDetails } from "../../components/MovieDetails";

const MoviePage = ({ movie }: { movie: MovieDetail }) => {
  return <MovieDetails movie={movie} />;
};

/*export async function getStaticPaths() {
  const res = await fetch(
    `${server}/discover/movie?api_key=${process.env.API_KEY}`
  );
  const { results }: GetMovieResults = await res.json();
  return {
    fallback: "blocking",
    paths: results.map((movie) => ({
      params: {
        movieId: String(movie.id), // String
      },
    })),
  };
}*/

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
  const res = await fetch(
    `${server}/movie/${context.query.movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const movie = await res.json();
  return {
    props: {
      movie,
    },
  };
};
export default MoviePage;
