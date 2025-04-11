import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {" · "}
      <Link to="/favorites">Favorites</Link>
      {" · "}
      <Link to="/trending-actors">Trending Actors</Link>
    </div>
  );
};

export default NavBar;
