import { useState, useEffect, useContext } from "react";
import { getMovieCredits } from "../services/api";
import { UseFavMoviesContext } from "../contexts/FavMoviesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const MovieCard = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [movieDirectors, setMovieDirectors] = useState(null);
  const { addFavMovie, rmFavMovie, isFavMovie } = UseFavMoviesContext();
  const favorite = isFavMovie(movie);

  useEffect(() => {
    const filterInDirectors = (credits) => {
      const directing = credits.crew.filter(({ job }) => job === "Director");
      return directing.map((director) => director.name);
    };

    const getCredits = async (id) => {
      try {
        const credits = await getMovieCredits(id);
        setMovieCredits(credits);
        //console.log(credits);
        const directors = filterInDirectors(credits);
        setMovieDirectors(directors);
        // console.log(directors);
      } catch (e) {
        console.log(e);
        setErrorMsg("Failed to load credits");
      } finally {
        setIsLoading(false);
      }
    };
    getCredits(movie.id);
  }, []);

  const handleToggleFav = () => {
    if (favorite) rmFavMovie(movie);
    else addFavMovie(movie);
  };
  const heartEmpty = (
    <FontAwesomeIcon
      icon={faHeartRegular}
      size="xl"
      beatFade
      className="cursor-pointer text-white"
    />
  );
  const heartFull = (
    <FontAwesomeIcon
      icon={faHeartSolid}
      size="xl"
      className="cursor-pointer text-red-600"
    />
  );
  return (
    <div className="relative max-w-md m-auto mb-5 overflow-hidden border border-zinc-600 rounded-xl group">
      <div className="absolute left-5 top-5 p-3 rounded-md bg-neutral-950/50 hidden group-hover:block max-sm:block">
        <h3 className="text-xl">{movie.original_title}</h3>
        <h4 className="mt-2 text-lg">
          Directed By:{" "}
          {isLoading
            ? "Loading directors..."
            : movieDirectors?.join(", ").toString()}
        </h4>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div className="absolute right-5 top-5" onClick={handleToggleFav}>
        {favorite ? heartFull : heartEmpty}
      </div>
    </div>
  );
};

export default MovieCard;
