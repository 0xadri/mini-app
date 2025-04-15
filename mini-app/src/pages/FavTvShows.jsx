import TvshowCard from "../components/TvshowCard";
import { useFavTvShowsContext } from "../contexts/FavTvShowsContext";

const FavTvShows = () => {
  const { favTvShows } = useFavTvShowsContext();

  return (
    <>
      <h1>Favorite TV Shows</h1>
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
