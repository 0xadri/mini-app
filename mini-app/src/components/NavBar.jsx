import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <Link to="/">🏠 Home: Search</Link>
      </div>
      <div>
        <Link to="/popular-movies">🔥 Hottest Movies Of All Time</Link>
        {" · "}
        <Link to="/trending-actors">🔥 Trending Actors</Link>
        {" · "}
        <Link to="/trending-tvshows">🔥 Trending TV Shows</Link>
      </div>
      <div>
        <Link to="/favorite-movies">❤️ Fav Movies</Link>
        {" · "}
        <Link to="/favorite-actors">❤️ Fav Actors</Link>
        {" · "}
        <Link to="/favorite-tvshows">❤️ Fav TV Shows</Link>
      </div>
    </>
  );
};

export default NavBar;
