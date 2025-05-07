import ActorCard from "../components/ActorCard";
import { useFavActorsContext } from "../contexts/FavActorsContext";

const FavActors = () => {
  const { favoriteActors } = useFavActorsContext();

  return (
    <>
      {favoriteActors && favoriteActors.length > 0 ? (
        favoriteActors.map((actor, index) => (
          <ActorCard key={index} actor={actor} />
        ))
      ) : (
        <h2 className="mt-10 text-lg text-center">
          You have no favorited any actor
        </h2>
      )}
    </>
  );
};

export default FavActors;
