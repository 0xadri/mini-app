import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies } from "/src/services/api";

const PopularMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const movies = await getPopularMovies();
        setMovies(movies);
      } catch (e) {
        console.log(e);
        setError("Failed To Load Popular Movies");
      } finally {
        setIsLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  return (
    <>
      <h2>Popular Movies</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      )}
    </>
  );
};

export default PopularMovies;
