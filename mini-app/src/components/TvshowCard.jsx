import { useFavTvShowsContext } from "../contexts/FavTvShowsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const heartEmpty = (
  <FontAwesomeIcon
    icon={faHeartRegular}
    size="xl"
    beatFade
    className="cursor-pointer text-white hover:text-red-600"
  />
);
const heartFull = (
  <FontAwesomeIcon
    icon={faHeartSolid}
    size="xl"
    className="cursor-pointer text-red-600"
  />
);

const TvshowCard = ({ tvshow }) => {
  const { isFavTvShow, addFavTvShow, rmFavTvShow } = useFavTvShowsContext();
  const favorite = isFavTvShow(tvshow);

  const handleToggleFav = () => {
    if (favorite) rmFavTvShow(tvshow);
    else addFavTvShow(tvshow);
  };

  return (
    <div className="relative max-w-md m-auto mb-5 overflow-hidden border border-zinc-600 rounded-xl group">
      <h3 className="absolute left-5 top-5 p-3 rounded-md text-xl bg-neutral-950/50 hidden group-hover:block max-sm:block">
        {tvshow.name}
      </h3>
      <img
        src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
        alt={tvshow.name}
      />
      <div className="absolute right-5 top-5" onClick={handleToggleFav}>
        {favorite ? heartFull : heartEmpty}
      </div>
    </div>
  );
};

export default TvshowCard;
