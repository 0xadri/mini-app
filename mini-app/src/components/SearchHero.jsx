import { useState } from "react";
import { searchMoviesContainingInTitle } from "../services/api";
import MovieCard from "./MovieCard";

const SearchHero = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMsg, setErroMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [moviesResult, setMovieResult] = useState(null);

  const searchWhatever = async (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    if (isLoading) return;

    try {
      let movies = await searchMoviesContainingInTitle(searchText);
      movies = movies.filter((movie) => movie.backdrop_path); // rm movies wo img
      setMovieResult(movies);
      setErroMsg(null);
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
      <form onSubmit={searchWhatever} className="srch-form">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="srch-input"
          id="srch-input"
        />
        <button type="submit" className="srch-button">
          Search
        </button>
      </form>

      {errorMsg && <div className="srch-error-msg">{errorMsg}</div>}

      <div>
        {!isLoading &&
          moviesResult.map((movie, index) => <MovieCard movie={movie} />)}
      </div>
    </>
  );
};

export default SearchHero;
