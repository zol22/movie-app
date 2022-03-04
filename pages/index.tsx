import type { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../app/store";
import Head from "next/head";
import { Movies, GetMovieResults } from "../types";
import Hero from "../components/Hero";
import { server } from "../config";
import MoviesContainer from "../components/MoviesContainer";
import { useState } from "react";
import PaginationButtons from "../components/paginationButtons";

const Home: NextPage<{ movies: Movies[]; page: number }> = ({
  movies,
  page,
}) => {
  return (
    <div>
      <Head>
        <title>Movie App</title>
        <meta
          name="description"
          content="Movie application where users can search for any movies and see/set their reviews"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <MoviesContainer movies={movies} />
      <PaginationButtons page={page} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    let { pageNum } = context.query;
    const res = await fetch(
      `${server}/discover/movie?page=${pageNum}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const { page, results }: GetMovieResults = await res.json();
    console.log(pageNum);
    return {
      props: {
        movies: results,
        page: page,
      },
    };
  });

export default Home;
