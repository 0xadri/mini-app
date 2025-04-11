import { useEffect, useState } from "react";
import { getTrendingActors } from "/src/services/api";
import ActorCard from "../components/ActorCard";

const TrendingActors = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const getActors = async () => {
      try {
        const actors = await getTrendingActors();
        setActors(actors);
        console.log(actors);
      } catch (e) {
        setErrorMsg("Error Getting Trending Actors");
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    getActors();
  }, []);

  return isLoading ? (
    <>
      <h1>Trending Actors</h1>
      <div>Loading...</div>
    </>
  ) : (
    <>
      <h1>Trending Actors</h1>
      {actors.map((actor, index) => (
        <ActorCard key={index} actor={actor} />
      ))}
    </>
  );
};

export default TrendingActors;
