import { useFavTvShowsContext } from "../contexts/FavTvShowsContext";

const TvshowCard = ({ tvshow }) => {
  const { isFavTvShow, addFavTvShow, rmFavTvShow } = useFavTvShowsContext();
  const favorite = isFavTvShow(tvshow);

  const handleToggleFav = () => {
    if (favorite) rmFavTvShow(tvshow);
    else addFavTvShow(tvshow);
  };

  return (
    <div className="tvshow-card">
      <h3>{tvshow.name}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
        alt={tvshow.name}
      />
      <div className="tvshow-toggle-fav" onClick={handleToggleFav}>
        Toggle Favorite - {favorite ? "is Fav" : "isn't Fav"}
      </div>
    </div>
  );
};

export default TvshowCard;
