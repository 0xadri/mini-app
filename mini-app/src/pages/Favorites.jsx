import { useState, useEffect } from "react";
import { FavMoviesProvider } from "../contexts/FavMoviesContext";
import { UseFavMoviesContext } from "../contexts/FavMoviesContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favMovies } = UseFavMoviesContext();

  return (
    <>
      <h1>Favorites</h1>
      {favMovies &&
        favMovies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
    </>
  );
};

export default Favorites;
