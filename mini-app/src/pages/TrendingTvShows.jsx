import { useEffect, useState } from "react";
import TvshowCard from "../components/TvshowCard";
import { getTrendingTvShows } from "../services/api";

const TrendingTvShows = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const getTvShows = async () => {
      try {
        const tvShows = await getTrendingTvShows();
        setTvShows(tvShows);
        console.log(tvShows);
      } catch (e) {
        console.log(e);
        setErrorMsg("Failed Getting TV Shows");
      } finally {
        setIsLoading(false);
      }
    };

    getTvShows();
  }, []);
  return (
    <>
      <h1>Trending TV Shows</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        tvShows.map((tvshow, index) => (
          <TvshowCard key={index} tvshow={tvshow} />
        ))
      )}
    </>
  );
};

export default TrendingTvShows;
