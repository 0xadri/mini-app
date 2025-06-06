import { UseFavMoviesContext } from "../contexts/FavMoviesContext";
import MovieCard from "../components/MovieCard";

const FavMovies = () => {
  const { favMovies } = UseFavMoviesContext();

  return (
    <>
      {favMovies && favMovies.length > 0 ? (
        favMovies.map((movie, index) => <MovieCard movie={movie} key={index} />)
      ) : (
        <h2 className="mt-10 text-lg text-center">
          You have not favorited any movie
        </h2>
      )}
    </>
  );
};

export default FavMovies;
