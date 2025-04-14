import { useFavActorsContext } from "../contexts/FavActorsContext";

const ActorCard = ({ actor }) => {
  const { isFavorite, rmFavorite, addFavorite } = useFavActorsContext();
  const favorite = isFavorite(actor);

  const handleToggleFav = () => {
    if (favorite) rmFavorite(actor);
    else addFavorite(actor);
  };

  return (
    <div className="actor-card">
      <h3>{actor.name}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        alt={actor.name}
      />{" "}
      <div className="actor-toggle-fav" onClick={handleToggleFav}>
        Toggle Favorite - {favorite ? "is Fav" : "isn't Fav"}
      </div>
    </div>
  );
};

export default ActorCard;
