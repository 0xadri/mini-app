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
    // if (isLoading) return;

    try {
      // setIsLoading(true);
      let movies = await searchMoviesContainingInTitle(searchText);
      movies = movies.filter((movie) => movie.backdrop_path); // rm movies wo img
      setMovieResult(movies);
      setErroMsg(null);
      // console.log(movies);
    } catch (e) {
      console.log(e);
      setErroMsg("Failed to get search results");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={searchWhatever} className="my-10 mx-40 text-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="srch-input mr-3 w-full bg-gray-700 text-gray-400 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
            id="srch-input"
          />
          <svg
            className="absolute left-3 inset-y-0 my-auto h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button type="submit" className="inline-block mt-3 ">
          Search
        </button>
      </form>

      {errorMsg && <div className="srch-error-msg">{errorMsg}</div>}

      <div>
        {!isLoading &&
          moviesResult.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
      </div>
    </>
  );
};

export default SearchHero;
