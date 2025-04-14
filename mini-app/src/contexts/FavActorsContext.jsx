import { createContext, useContext, useState, useEffect } from "react";

const FavActorsContext = createContext();

export const useFavActorsContext = () => useContext(FavActorsContext);

export const FavActorsProvider = ({ children }) => {
  const [favoriteActors, setFavoriteActors] = useState([]);

  useEffect(() => {
    const favActors = localStorage.getItem("favorite-actors");
    if (favActors) setFavoriteActors(JSON.parse(favActors));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorite-actors", JSON.stringify(favoriteActors));
  }, [favoriteActors]);

  const isFavorite = (actor) => {
    const actors = favoriteActors.filter(
      (currActor) => currActor.id === actor.id
    );
    return actors.length > 0;
  };

  const addFavorite = (actor) => {
    setFavoriteActors([...favoriteActors, actor]);
  };

  const rmFavorite = (actor) => {
    const actors = favoriteActors.filter(
      (currActor) => currActor.id !== actor.id
    );
    setFavoriteActors(actors);
  };

  const value = {
    favoriteActors,
    isFavorite,
    rmFavorite,
    addFavorite,
  };

  return (
    <FavActorsContext.Provider value={value}>
      {children}
    </FavActorsContext.Provider>
  );
};
