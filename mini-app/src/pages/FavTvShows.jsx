import TvshowCard from "../components/TvshowCard";
import { useFavTvShowsContext } from "../contexts/FavTvShowsContext";

const FavTvShows = () => {
  const { favTvShows } = useFavTvShowsContext();

  return (
    <>
      {favTvShows ? (
        favTvShows.map((tvshow) => {
          return <TvshowCard tvshow={tvshow} />;
        })
      ) : (
        <div>Nothing</div>
      )}
    </>
  );
};

export default FavTvShows;
