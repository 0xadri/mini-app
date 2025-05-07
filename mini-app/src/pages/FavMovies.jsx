import { UseFavMoviesContext } from "../contexts/FavMoviesContext";
import MovieCard from "../components/MovieCard";

const FavMovies = () => {
  const { favMovies } = UseFavMoviesContext();

  return (
    <>
      {favMovies &&
        favMovies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
    </>
  );
};

export default FavMovies;
