import { useState } from "react";
import { searchMoviesContainingInTitle } from "../services/api";
import MovieCard from "./MovieCard";

const SearchHero = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMsg, setErroMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [moviesResult, setMovieResult] = useState(null);

  const searchWhatever = async () => {
    try {
      let movies = await searchMoviesContainingInTitle(searchText);
      movies = movies.filter((movie) => movie.backdrop_path); // rm movies wo img
      setMovieResult(movies);
      console.log(movies);
    } catch (e) {
      console.log(e);
      setErroMsg("Failed to get search results");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button onClick={searchWhatever}>Search</button>
      </div>
      <div>
        {!isLoading &&
          moviesResult.map((movie, index) => <MovieCard movie={movie} />)}
      </div>
    </>
  );
};

export default SearchHero;
