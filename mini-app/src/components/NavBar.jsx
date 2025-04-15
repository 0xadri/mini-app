import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        {" · "}
        <Link to="/popular-movies">🎬 Popular Movies</Link>
        {" · "}
        <Link to="/trending-actors">🔥 Hottest Actors</Link>
        {" · "}
        <Link to="/trending-tvshows">🔥 Hottest TV Shows</Link>
      </div>
      <div>
        <span>❤️ Favorites </span>
        <Link to="/favorite-movies">❤️ Fav Movies</Link>
        {" · "}
        <Link to="/favorite-tvshows">❤️ Fav TV Shows</Link>
        {" · "}
        <Link to="/favorite-actors">❤️ Fav Actors</Link>
      </div>
    </>
  );
};

export default NavBar;
