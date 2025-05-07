import ActorCard from "../components/ActorCard";
import { useFavActorsContext } from "../contexts/FavActorsContext";
import { useState, useEffect } from "react";

const FavActors = () => {
  const { favoriteActors } = useFavActorsContext();

  return (
    <>
      {favoriteActors &&
        favoriteActors.map((actor, index) => (
          <ActorCard key={index} actor={actor} />
        ))}
    </>
  );
};

export default FavActors;
