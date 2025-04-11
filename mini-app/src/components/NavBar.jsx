import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {" · "}
      <Link to="/favorites">❤️ Favorites</Link>
      {" · "}
      <Link to="/trending-actors">🔥 Actors</Link>
      {" · "}
      <Link to="/trending-tvshows">🔥 TV Shows</Link>
    </div>
  );
};

export default NavBar;
