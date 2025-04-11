import { useState, useEffect } from "react";
import { getMovieCredits } from "../services/api";

const MovieCard = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [movieDirectors, setMovieDirectors] = useState(null);

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

  return (
    <div className="movie-card">
      <h3>{movie.original_title}</h3>
      <h4>
        Directed By:{" "}
        {isLoading
          ? "Loading directors..."
          : movieDirectors?.join(", ").toString()}
      </h4>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
    </div>
  );
};

export default MovieCard;
