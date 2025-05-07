import TvshowCard from "../components/TvshowCard";
import { useFavTvShowsContext } from "../contexts/FavTvShowsContext";

const FavTvShows = () => {
  const { favTvShows } = useFavTvShowsContext();

  return (
    <>
      {favTvShows && favTvShows.length > 0 ? (
        favTvShows.map((tvshow) => {
          return <TvshowCard tvshow={tvshow} />;
        })
      ) : (
        <h2 className="mt-10 text-lg text-center">
          You have not favorited any tv shows
        </h2>
      )}
    </>
  );
};

export default FavTvShows;
