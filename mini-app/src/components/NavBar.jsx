import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {" · "}
      <Link to="/popular-movies">🎬 Movies Classics</Link>
      {" · "}
      <Link to="/trending-actors">🔥 Actors</Link>
      {" · "}
      <Link to="/trending-tvshows">🔥 TV Shows</Link>
      {" · "}
      <Link to="/favorites">❤️ Favorites</Link>
    </div>
  );
};

export default NavBar;
