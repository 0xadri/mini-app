import { createContext, useContext, useState, useEffect } from "react";

const FavMoviesContext = createContext();

export const UseFavMoviesContext = () => useContext(FavMoviesContext);

export const FavMoviesProvider = ({ children }) => {
  const [favMovies, setFavMovies] = useState([]);

  const addFavMovie = (movie) => {
    setFavMovies((prev) => [...prev, movie]);
  };

  const rmFavMovie = (movie) => {
    setFavMovies(favMovies.filter((currMovie) => currMovie.id !== movie.id));
  };

  const isFavMovie = (movie) => {
    const movies = favMovies.filter((currMovie) => currMovie.id === movie.id);
    return movies.length > 0;
  };

  useEffect(() => {
    const currFavMovies = localStorage.getItem("favMovies");
    if (currFavMovies) setFavMovies(JSON.parse(currFavMovies));
  }, []);

  useEffect(() => {
    localStorage.setItem("favMovies", JSON.stringify(favMovies));
  }, [favMovies]);

  const value = {
    favMovies,
    addFavMovie,
    rmFavMovie,
    isFavMovie,
  };

  return (
    <FavMoviesContext.Provider value={value}>
      {children}
    </FavMoviesContext.Provider>
  );
};
