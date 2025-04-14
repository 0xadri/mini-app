import { useState, useEffect } from "react";
import { FavMoviesProvider } from "../contexts/FavMoviesContext";
import { UseFavMoviesContext } from "../contexts/FavMoviesContext";
import MovieCard from "../components/MovieCard";

const FavMovies = () => {
  const { favMovies } = UseFavMoviesContext();

  return (
    <>
      <h1>Favorite Movies</h1>
      {favMovies &&
        favMovies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
    </>
  );
};

export default FavMovies;
