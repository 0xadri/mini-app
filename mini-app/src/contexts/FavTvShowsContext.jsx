import { createContext, useContext, useState, useEffect } from "react";

/*
 * Ctx HowTo:
 *  1. context component, create everything
 *  2. card component, add button & functionality
 *  3. app component, add context
 */

const FavTvShowsContext = createContext();

export const useFavTvShowsContext = () => useContext(FavTvShowsContext);

export const FavTvShowsProvider = ({ children }) => {
  const [favTvShows, setFavTvShows] = useState([]);

  useEffect(() => {
    const favTvShows = localStorage.getItem("fav-tvshows");
    if (favTvShows) setFavTvShows(JSON.parse(favTvShows));
  }, []);

  useEffect(() => {
    localStorage.setItem("fav-tvshows", JSON.stringify(favTvShows));
  }, [favTvShows]);

  const isFavTvShow = (tvshow) => {
    const matchingTvShows = favTvShows.filter(
      (currTvShow) => currTvShow.id === tvshow.id
    );
    return matchingTvShows.length > 0;
  };

  const addFavTvShow = (tvshow) => {
    setFavTvShows((favTvShows) => [...favTvShows, tvshow]);
  };

  const rmFavTvShow = (tvshow) => {
    setFavTvShows(
      favTvShows.filter((currTvShow) => currTvShow.id !== tvshow.id)
    );
  };

  const value = {
    favTvShows,
    isFavTvShow,
    addFavTvShow,
    rmFavTvShow,
  };

  return (
    <FavTvShowsContext.Provider value={value}>
      {children}
    </FavTvShowsContext.Provider>
  );
};
